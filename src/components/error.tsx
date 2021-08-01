import React from 'react';
import {
  Grid, Typography, Button, Container, makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    margin: '150px 0px 150px 0px',
  },
  oops: {
    fontSize: '40px',
    fontWeight: 'bold',
  },
  wrong: {
    fontSize: '25px',
  },
  reload: {
    fontSize: '20px',
    marginTop: 20,
  },
}));

const Error = (props: any) => {
  const classes = useStyles();
  const { reload } = props;

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" className={classes.oops}>
              Oops!
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" className={classes.wrong}>
              Somehthing went wrong.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              <Button className={classes.reload} onClick={() => reload()}>Reload</Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Error;
