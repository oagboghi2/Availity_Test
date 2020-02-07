import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { FormGroup, Typography, Button } from "@material-ui/core";
import axios from "axios";

import styles from "../styles/formStyles";

class fileUpload extends Component {
    state = {
        file: null,
        fileResponse: null
    };

    handleUploadFile = e => {
        if (e.target.files) {
            const file = e.target.files[0];
            this.setState({ file });
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        // First Parse the File into String
        if (this.state.file) {
            const reader = new FileReader();
            reader.onload = event => {
                const fileString = event.target.result;
                // console.log("FILE AS STRING", fileString);
                const postObj = { fileString, fileName: this.state.file.name };
                axios
                    .post("api/parse/", postObj)
                    .then(({ data }) => {
                        console.log(
                            "DATA RECEIVED FROM SUBMITTING ENROLLMENT FILE",
                            data
                        );
                        this.setState({ fileResponse: data });
                    })
                };
                reader.readAsText(this.state.file);
            };   
        }
        
    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className={classes.container}>
                <Typography variant="subtitle1" className={classes.formHeader}>
                    Upload CSV
                </Typography>
            
                    <FormGroup row className={classes.formRow}>
                        <input
                            accept=".csv"
                            className={classes.hiddenInput}
                            id="file-input"
                            multiple
                            type="file"
                            onChange={this.handleUploadFile}
                        />
                        <label htmlFor="file-input">
                            <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                className={classes.button}
                            >
                                Upload CSV
                            </Button>
                        </label>
                        <Typography
                            variant="subtitle1"
                            gutterBottom={false}
                            className={classes.fieldDescription}
                        >
                            File Name:{" "}
                            <span>
                                {this.state.file && this.state.file.name}
                            </span>
                        </Typography>
                        <FormGroup row className={classes.formRow}>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                className={classes.submitButton}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </FormGroup>
                
                {this.state.fileResponse ? (
                
                        <FormGroup>
                            <Typography>
                                Total Records:{" "}
                                <span>
                                    {this.state.fileResponse
                                        .totalRecordsProcessed }
                                </span>
                            </Typography>
                        </FormGroup>
                ) : <h6>loading...</h6>}
            </form>
        );
    }
}

export default withRouter(withStyles(styles, { withTheme: true })(fileUpload));