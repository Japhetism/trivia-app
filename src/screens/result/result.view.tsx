import React from 'react';
import {
  List, ListItem, ListItemIcon, ListItemText, Typography, Grid, makeStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from 'react-router-dom';
import { htmlParser } from '../../utils/helper';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '70px',
  },
  text: {
    fontSize: '30px',
    margin: '100px 0px 10px 0px',
  },
  link: {
    color: '#000000',
  },
}));

const ResultView = (props: any) => {
  const classes = useStyles();

  const { scores, answers } = props;

  return (
    <>
      <Grid item xs={12} container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="h3" className={classes.title}>
              You scored
              <br />
              {`${scores} / ${answers.length}`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <List>
              {answers.map((answer: any) => (
                <ListItem button key={Math.random()}>
                  <ListItemIcon>
                    {answer.answer === 'correct' ? <AddIcon /> : <RemoveIcon />}
                  </ListItemIcon>
                  <ListItemText primary={htmlParser(answer.question)} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" className={classes.text}>
              <Link to="/quiz" className={classes.link}>PLAY AGAIN?</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ResultView;
