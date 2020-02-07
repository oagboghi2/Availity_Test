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
import styles from "../styles/formStyles.js";

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
        email: "",
        value: 0,
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

        navigate = route => e => {
        if (route === "/") this.setState({ value: 0 });
        else this.setState({ value: 1 });
        this.props.history.push(route);
    };

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
                            <TextField className={classes.formField}
                            required
                            type="text"
                            variant="outlined"
                            label="First Name"
                            onChange={this.handleChange("firstName")}
                            />
                            <TextField className={classes.formField}
                            required
                            type="text"
                            variant="outlined"
                            label="Last Name"
                            onChange={this.handleChange("lastName")}
                            />
                            <TextField className={classes.formField}
                            required
                            type="text"
                            variant="outlined"
                            label="NPI Number"
                            helperText="As it appears on your NPI registration"
                            onChange={this.handleChange("npi")}
                            />
                            <TextField className={classes.formField}
                            required
                            type="text"
                            variant="outlined"
                            label="Address Line 1"
                            onChange={this.handleChange("address1")}
                            />
                            <TextField className={classes.formField}
                            required
                            type="text"
                            variant="outlined"
                            label="Address Line 2"
                            onChange={this.handleChange("address2")}
                            />
                            <TextField className={classes.formField}
                            required
                            type="text"
                            variant="outlined"
                            label="City"
                            onChange={this.handleChange("city")}
                            />
                            <TextField className={classes.formField}
                            required
                            type="text"
                            variant="outlined"
                            label="State"
                            onChange={this.handleChange("state")}
                            />
                            <TextField className={classes.formField}
                            required
                            type="text"
                            variant="outlined"
                            label="Zip Code"
                            onChange={this.handleChange("zip")}
                            />
                            <TextField className={classes.formField}
                            required
                            type="tel"
                            variant="outlined"
                            label="Phone Number"
                            onChange={this.handleChange("phone")}
                            />
                            <TextField className={classes.formField}
                            required
                            type="email"
                            variant="outlined"
                            label="Email"
                            onChange={this.handleChange("email")}
                            />
                        </FormGroup>

                        <FormGroup className={"formGroup2"}>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                className={classes.submitButton}
                            >
                                Submit
                            </Button>
                            <Button
                                type="submit"
                                color=""
                                variant="contained"
                                className={classes.submitButton}
                                onClick={this.navigate("/parse")}

                            >
                                parse CSV data
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