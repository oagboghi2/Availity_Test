import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";

class Navigation extends Component {
    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    };

    state={ value : 0  }

    navigate = route => e => {
        if (route === "/") this.setState({ value: 0 });
        else this.setState({ value: 1 });
        this.props.history.push(route);
    };

    handleChange = prop => e => {
        this.setState({ [prop]: e.target.value });
    };
  
    render() {
      const { match, location, history } = this.props;
  
      return <div>You are now at {location.pathname}</div>;
    }
  }
  
  // Create a new component that is "connected" (to borrow redux
  // terminology) to the router.
  const ShowTheLocationWithRouter = withRouter(Navigation);