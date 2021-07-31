import React from 'react';
import DefaultLayout from '../../components/default.layout';
import { 
    List, ListItem, ListItemIcon, ListItemText, Typography, Grid, makeStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';

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
    link: {
        color: '#000000'
    },
}));

const ResultView = () => {

    const classes = useStyles();

    return <DefaultLayout>
        <Grid item xs={12} container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="h3" className={classes.title}>
                        Your scored<br />
                        3 / 10
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                    <List>
                    {[1,2,3,4,5,6].map((link, index) => (
                        <ListItem button key={link}>
                            <ListItemIcon>
                                {/* {<img src={link.icon} alt="" className={classes.image} />} */}
                                </ListItemIcon>
                            <ListItemText primary={link} />
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
                        <Link to={'/quiz'} className={classes.link}>PLAY AGAIN?</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </DefaultLayout>
}

export default ResultView;