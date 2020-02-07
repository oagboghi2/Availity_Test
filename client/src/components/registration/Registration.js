import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
    TextField,
    FormGroup,
    Typography,
    Button,
    Paper
} from "@material-ui/core";
import axios from "axios";
import "./styles.css";
import styles from "../styles/formStyles.js.js";

class Registration extends Component {
    state = {
        firstName: "",
        lastName: "",
        npi: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: ""
    };

    componentDidMount(){}
    handleChange = props => e => {
        this.setState({ [props] : e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const {
            firstName, 
            lastName,
            npi,
            address1,
            address2,
            city,
            state,
            zip,
            phone,
            email
        } = this.state;
        const dataObj = {
            firstName,
            lastName,
            npi,
            address: `${address1} ${address2} ${city}, ${state} ${zip}`,
            phone,
            email
        };
        axios
            .post("/api/providers/registration", dataObj)
            .then(({ data }) => {
                console.log("response from registration", data)
            })
            .catch(err => {
                console.error("Error", err.message)
            });
            console.log("Submitting", dataObj)
    console.log("Submitting", dataObj)
         }

    render(){
        const {classes} = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className={"container"} >
                    <Typography className={classes.formHeader}>
                        Provider Registration
                    </Typography>
                    <Paper >
                        <FormGroup className={"formRow"}>
                            <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="First Name"
                            onChange={this.handleChange("firstName")}
                            />
                            <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="Last Name"
                            onChange={this.handleChange("lastName")}
                            />
                            <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="NPI Number"
                            helperText="As it appears on your NPI registration"
                            onChange={this.handleChange("npi")}
                            />
                            <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="Address Line 1"
                            onChange={this.handleChange("address1")}
                            />
                            <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="Address Line 2"
                            onChange={this.handleChange("address2")}
                            />
                            <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="City"
                            onChange={this.handleChange("city")}
                            />
                            <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="State"
                            onChange={this.handleChange("state")}
                            />
                            <TextField className={"formField"}
                            required
                            type="text"
                            variant="outlined"
                            label="Zip Code"
                            onChange={this.handleChange("zip")}
                            />
                            <TextField className={"formField"}
                            required
                            type="tel"
                            variant="outlined"
                            label="Phone Number"
                            onChange={this.handleChange("phone")}
                            />
                            <TextField className={"formField"}
                            required
                            type="email"
                            variant="outlined"
                            label="Email"
                            onChange={this.handleChange("email")}
                            />
                        </FormGroup>

                        <FormGroup >
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                className={classes.submitButton}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </Paper>
                </form>
            </div>
        );
    }
}

export default withRouter(
    withStyles(styles, { withTheme: true })(Registration)
);