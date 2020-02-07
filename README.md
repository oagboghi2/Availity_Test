This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



# Availity_Test

## Question 1: Tell me about your proudest professional achievement.  It can be a personal or school project.  

I have 2 accomplishments that I am most proud of in my programming history. The first was a school project I created along with my classmates called myshifts.app. This was a fullStack app built with react, redux, python and django. The app handled scheduling and billing for employee's of a small buisness. I worked mainly on the frontend side, building out the landing page,the calendar component and handling the state management using redux.

The 2nd accomplishment was building out a large Sql database with Node.js for a home health agency in southern california. This app was used to help nurses monitor and keep track of their patients and their relationship with them. Keeping track of doctor orders, medications, payment informatiomn and making sure everything was heavily protected and valid uder HIPAA and other regulations was a constant struggle, but I learned a great deal durinmg the process. I beleive the experiece made me a much better programmer.

## Tell me a about a book, blog, article or GitHub repo you read or liked recently, and why you like it and why you should recommend I do the same. 

I read a lot of various blog posts and medium artciels aboiut various concepts revolving around javascript, react, HTML/CSS, data structures and algorithms, etc etc so it's hard to reccomment just one. There is however a book I return more often than not. Eloquent Javascript, is one of the best books out there to understand pure vanilla javascripts. Once you have a strong foundation in JS, espeically in it's approach to objects and classes, that frameworks such as react and vue become much easier to understand. 

I would also note Brian Holts computer science github https://btholt.github.io/four-semesters-of-cs/ is easy to reccommend as well. It's a very easy to quickly brush up on Data structures and algorithms

## 3. If you were to describe to a 7-year old what Availity does, what would you say?

I would tell a child that Availity works as sort of bridge, helping doctors and nurses connect with different healthcare insurance companies that are around the country, and figure out medical claims, biliing issues ans other issues that might arise. 

##  You are tasked to write a checker that validates the parentheses of a LISP code.  Write a program (in Java or JavaScript) which takes in a string as an input and returns true if all the parentheses in the string are properly closed and nested.

function balancedParenthesis(str){

  // Declare a character stack which will hold an array of all the opening parenthesis.
   var obj1 = [];
   let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    // Now traverse the expression string exp.
    // split the string
     var spl = str.split("");
    // loop through the split string
   for(var i = 0; i < spl.length; i++){
    if (spl[i] === '(' || spl[i] === '{' || spl[i] === '[' ) {
          obj1.push(spl[i]);
          console.log("obj1", obj1)
        } else {
          // If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine 
          let last = obj1.pop();
            if (spl[i] !== map[last]) {
              console.log("spl[i]", spl[i])
              console.log("last", last)
              return false
              };
          }
        }
            // After complete traversal, if there is some starting bracket left in stack then “not balanced”
        if (obj1.length !== 0) {return false};
        // if it is empty
          return true;
   }


## For frontend engineer: Healthcare providers request to be part of the Availity system.  Using React framework, create a registration user interface so healthcare providers can electronically join Availity.  The following data points should be collected

 enter the client directory and run "npm start" to open a production version of this exercise. I focused on building a simple UI that returned a objecct with all requested data using axios

 ## Coding exercise:  Availity receives enrollment files from various benefits management and enrollment solutions (I.e. HR platforms, payroll platforms).  Most of these files are typically in EDI format.  However, there are some files in CSV format.  For the files in CSV format, write a program that will read the content of the file and separate enrollees by insurance company in its own file. Additionally, sort the contents of each file by last and first name (ascending).  Lastly, if there are duplicate User Ids for the same Insurance Company, then only the record with the highest version should be included. The following data points are included in the file:

I was a built confused with this excersize, so I built two different versions. One uses node.js in the terminal to return a log of the csv files requested.

The 2nd version operates alongside the react excersize. run npm run dev in the root folder and  npm run build to create the frontend. Under localhost:8080 you will see a live version. You can click on the CSV parse button or enter "/parse" in the url to visit the csv page, which allows you to select a CSV file you want to parse.