import React from 'react';
import DefaultLayout from '../../components/default.layout';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '70px',
    },
    text: {
        fontSize: '30px',
        margin: '100px 0px 10px 0px',
    },
    button: {
        margin: '50px',
    },
    question: {
        border: '2px solid',
        margin: '0px 50px 0px 50px',
    },
    questionText: {
        fontSize: '30px',
        margin: '50px 0px 10px 0px',
    },
    questionNumber: {
        fontSize: '30px',
        margin: '10px 0px 10px 0px',
    },
    questionNumberContainer: {
        marginBottom: '150px',
    },
}));

const QuizView = () => {

    const classes = useStyles();

    return <DefaultLayout>
        <Grid item xs={12} container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="h3" className={classes.title}>
                        Entertainment: Video Games
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm container className={classes.question}>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" className={classes.questionText}>
                        Unturned originally started as a Roblox game.
                    </Typography>
                    <Button variant="outlined" className={classes.button}>True</Button>
                    <Button variant="outlined" className={classes.button}>False</Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} container className={classes.questionNumberContainer}>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" className={classes.questionNumber}>
                        1 of 10
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </DefaultLayout>
}

export default QuizView;