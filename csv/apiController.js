const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const parse = require("csv-parse");
const router = express.Router();

/* Enrollment CSV */
const parseCSVfiles = async (req, res) => {
    console.log(req.body)
    const insuranceSections = {};
    const insuranceIds = {};
    let headers = [];
    const results = [];

    //record is the data we are currently looking at
    let record;
    let rows = 0;
    let mapToData = {};
    //create variables for different data
    let insuranceCompanyId = 0;
    let lastNameId = 0;
    let firstNameId = 0;

    // Variables for Response
    const resObject = {};

    // Create the parser
    const parser = parse(req.body.fileString,{
        delimiter: ',',
        trim: true,
        skip_empty_lines: true,
      }).on("readable", function() {
            while ((record = parser.read())) {
                console.log("record", record)
                // check to see the first row has the correct headers
                // and update their variables
                if (rows === 0) {
                    headers = record;
                    resObject.headersFound = record;
                    insuranceCompanyId = record.indexOf("InsuranceCompany");
                    userId = record.indexOf("UserID");
                    versionId = record.indexOf("Version");
                    lastNameId = record.indexOf("LastName");
                    firstNameId = record.indexOf("FirstName");
                } else {
                    // if we aren't ont he first row, create conditionals
                    if (!insuranceSections[record[insuranceCompanyId]]) {
                        insuranceSections[record[insuranceCompanyId]] = {
                            name: record[insuranceCompanyId],
                            records: [record]
                        };
                        console.log("insuranceSections", insuranceSections['Florida Blue'])
                    } else {
                        
                            insuranceSections[record[insuranceCompanyId]].records.push(
                                record
                            );
                            console.log("insuranceSections", insuranceSections[record[insuranceCompanyId]])
                        
                    }
                    results.push(record);
                    console.log("results", results)
                }
                rows++;
            }
        })
        .on("end", function() {
             console.log("FINISHED PARSING FILE");
             console.log("INSURANCE", insuranceSections);

            const insuranceCompanies = Object.keys(insuranceSections);
            resObject.insuranceCompanies = insuranceCompanies;
            resObject.recordsPerInsuranceCompany = [];
            
            insuranceCompanies.forEach(companyName => {
                const sortedRecords = insuranceSections[companyName].records.sort((a, b) => {
                    a[lastNameId].localeCompare(b[lastNameId]) && a[firstNameId].localeCompare(b[firstNameId])
                });
                resObject.recordsPerInsuranceCompany.push(
                    insuranceSections[companyName]
                );
                let fileData = headers.join(",") + "\n";
                for(var i = 0; i < sortedRecords.length; i++){
                    fileData += sortedRecords[i].join(",") + "\n";
                }
                const fileToWrite = `./csv/filename/${companyName}_revised.csv`;
                fs.writeFile(fileToWrite, fileData, "utf8", err => {
                    if (err) {
                        console.error("FAILURE WRITING:", fileToWrite, err);
                        return res.status(500).end();
                    }
                    else console.log("SUCESS WRITING FILE:", fileToWrite);
                });
            });
            resObject.totalRecordsProcessed = rows;
            resObject.mapToData = mapToData;
            res.send(resObject);
        });
};

router.post("/parse", parseCSVfiles);

module.exports = router;
