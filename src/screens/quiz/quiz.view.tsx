import React, { useState, useEffect } from 'react';
import DefaultLayout from '../../components/default.layout';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Container } from '@material-ui/core';

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
    },
    questionText: {
        fontSize: '30px',
        margin: '80px 50px 10px 50px',
    },
    questionNumber: {
        fontSize: '30px',
        margin: '10px 0px 10px 0px',
    },
    questionNumberContainer: {
        marginBottom: '150px',
    },
}));

const QuizView = (props: any) => {

    const classes = useStyles();
    const [questions, setQuestions] = useState([]);

    useEffect(()=> {
        const questions = props?.questions?.questionsData?.questions?.results;
        setQuestions(questions);
    }, [props]);

    return <DefaultLayout>
        {questions && questions.map((question, index) => ( 
            <Container key={Math.random()} maxWidth="sm">
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
                                {`${index + 1} of 10`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        ))}
    </DefaultLayout>
}

export default QuizView;