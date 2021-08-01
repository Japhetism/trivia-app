import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    margin: 200,
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <CircularProgress disableShrink />
    </Container>
  );
};

export default Loader;
