import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '50px',
        fontWeight: 'bold',
    },
    text: {
        fontSize: '30px',
        margin: '100px 0px 10px 0px',
    },
    link: {
        color: '#000000'
    },
}));

const HomeView = () => {

    const classes = useStyles();

    return <React.Fragment>
        <Grid item xs={12} container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="h3" className={classes.title}>
                        Welcome to the Trivia Challenge!
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" className={classes.text}>
                        You will be presented with 10 True or False Questions.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" className={classes.text}>
                        Can you score 100%?
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" className={classes.text}>
                        <Link to={'/quiz'} className={classes.link}>BEGIN</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>
}

export default HomeView;