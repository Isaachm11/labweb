import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";
import React from "react";
import "./FakeGraphCard.css";

const useCardStyles = makeStyles({
  root: {
    width: 345,
    borderRadius: 20,
    boxShadow: "10px 15px 15px #480CA8",
    backgroundColor: "#e9ecef",
  },

  button: {
    paddingTop: 10,
  },

  media: {
    width: 200,
    height: 200,
    margin: "auto",
    borderRadius: 10,
  },

  textLeft: {
    marginLeft: "auto",
    color: "#4CC9F0",
  },
});

const useGridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FakeGraphCard() {
  const firstClasses = useCardStyles();
  const secondClasses = useGridStyles();

  return (
    <div className={secondClasses.root} id={"cards"}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={firstClasses.root}>
            <CardActionArea className={firstClasses.button}>
              <CardMedia
                component="img"
                className={firstClasses.media}
                image="https://sta.laits.utexas.edu/wp-content/uploads/files/charts.png"
                title="Graph Example"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Monthly Average User Logins
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This data belongs to the month of April
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="small"
                color="primary"
                className={firstClasses.textLeft}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={firstClasses.root}>
            <CardActionArea className={firstClasses.button}>
              <CardMedia
                component="img"
                className={firstClasses.media}
                image="https://sta.laits.utexas.edu/wp-content/uploads/files/charts.png"
                title="Graph Example"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Monthly Average User Logins
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This data belongs to the month of May
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="small"
                color="primary"
                className={firstClasses.textLeft}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={firstClasses.root}>
            <CardActionArea className={firstClasses.button}>
              <CardMedia
                component="img"
                className={firstClasses.media}
                image="https://sta.laits.utexas.edu/wp-content/uploads/files/charts.png"
                title="Graph Example"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Monthly Average User Logins
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This data belongs to the month of June
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="small"
                color="primary"
                className={firstClasses.textLeft}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={firstClasses.root}>
            <CardActionArea className={firstClasses.button}>
              <CardMedia
                component="img"
                className={firstClasses.media}
                image="https://sta.laits.utexas.edu/wp-content/uploads/files/charts.png"
                title="Graph Example"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Monthly Average User Logins
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This data belongs to the month of July
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="small"
                color="primary"
                className={firstClasses.textLeft}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={firstClasses.root}>
            <CardActionArea className={firstClasses.button}>
              <CardMedia
                component="img"
                className={firstClasses.media}
                image="https://sta.laits.utexas.edu/wp-content/uploads/files/charts.png"
                title="Graph Example"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Monthly Average User Logins
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This data belongs to the month of August
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="small"
                color="primary"
                className={firstClasses.textLeft}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={firstClasses.root}>
            <CardActionArea className={firstClasses.button}>
              <CardMedia
                component="img"
                className={firstClasses.media}
                image="https://sta.laits.utexas.edu/wp-content/uploads/files/charts.png"
                title="Graph Example"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Monthly Average User Logins
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This data belongs to the month of September
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="small"
                color="primary"
                className={firstClasses.textLeft}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
