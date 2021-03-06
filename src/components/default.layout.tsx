import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '30px',
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      background: '#D6D5D5',
    },
    layout: {
        textAlign: 'center',
    },
}));

const DefaultLayout = (props: any) => {

    const classes = useStyles();

    const {children} = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2} className={classes.layout}>
                    {children}
                </Grid>
            </Paper>
        </div>
    );
}

export default DefaultLayout;