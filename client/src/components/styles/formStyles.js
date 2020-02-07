const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        height: `calc(100vh - 64px - 16px)`,
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    
    formRow: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    formRowLeft: {
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    formHeader: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            minWidth: 0,
            marginLeft: 0,
            width: "100%"
        },
        [theme.breakpoints.up("md")]: {
            minWidth: `calc(400px - 16px)`,
            marginLeft: theme.spacing(2)
        },
        textAlign: "center"
    },
    formField: {
        marginTop: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            width: "100%"
        },
        [theme.breakpoints.up("md")]: {
            width: `calc(400px - 16px)`,
            marginLeft: theme.spacing(2)
        }
    },
    buttonsRow: {
        display: "flex",
        flexDirection: "row",
        padding: theme.spacing(2),
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    submitButton: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        minWidth: `calc(400px - 16px)`
    },
    hiddenInput: {
        display: "none"
    },
    fieldDescription: {
        display: "flex",
        marginLeft: theme.spacing(2),
        "& span": {
            marginLeft: theme.spacing(),
            fontWeight: 900
        }
    }
});

export default styles;
