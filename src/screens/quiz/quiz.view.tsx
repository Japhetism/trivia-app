import React from 'react';
import { Grid, Typography, Button, Container, makeStyles } from '@material-ui/core';
import { htmlParser } from '../../utils/helper';
import Loader from '../../components/loader';
import Error from '../../components/error';

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
        margin: '30px',
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
    
    const {questions, activeQuestion, handleAnswers, isLoading, error, reload} = props;

    return <React.Fragment>
        {isLoading && <Loader />}
        {error && <Error reload={reload} />}
        {questions && questions.map((question: any, index: number) => ( 
            <div hidden={activeQuestion === index ? false : true} key={Math.random()}>
                <Container key={Math.random()} maxWidth="sm">
                    <Grid item xs={12} container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h3" className={classes.title}>
                                    {question.category}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm container className={classes.question}>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className={classes.questionText}>
                                    {htmlParser(question.question)}
                                </Typography>
                                <Button variant="outlined" className={classes.button} onClick={() => handleAnswers(index, question, "True")}>True</Button>
                                <Button variant="outlined" className={classes.button} onClick={() => handleAnswers(index, question, "False")}>False</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container className={classes.questionNumberContainer}>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className={classes.questionNumber}>
                                    {`${index + 1} of ${questions.length}`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        ))}
    </React.Fragment>
}

export default QuizView;