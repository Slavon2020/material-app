import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
      position: 'relative',
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    mainFeaturesPostContent: {
      position: 'relative',
      padding: theme.spacing(6),
      marginTop: theme.spacing(8)
    },
    overlay: {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      backgroundOverlay: 'rgba(0, 0, 0, 0.3)'
    },
    cardGrid: {
      marginTop: theme.spacing(4)
    },
    cardMedia: {
      paddingTop: '56.25%'
  
    },
    cardContent: {
      flexGrow: 1
    }
  }
));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Main = () => {
    const classes = useStyles();

    return (
        <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
            <Container fixed>
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturesPostContent}>
                    <Typography
                    component='h1'
                    color='inherit'
                    variant='h3'
                    gutterBottom>
                      Material app
                    </Typography>
                    <Typography
                    variant='h5'
                    color='inherit'
                    paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sed, modi, dolorem aperiam in, architecto aspernatur ipsum quod laboriosam non aut error illo quam magni?
                    </Typography>
                    <Button variant='contained' color='secondary'>
                      Learn more...
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
        </Paper>

        <div>
          <Container maxWidth='md'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Material app
            </Typography>
            <Typography variant='h5' color='textSecondary' paragraph align='center'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium iusto molestias soluta molestiae numquam quam commodi dolore vel a ea velit corrupti beatae consectetur eum aspernatur modi quaerat recusandae inventore magni nesciunt, nihil, libero odit! Beatae, possimus dolore?
            </Typography>

            <div>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>Start now</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>Learn more...</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                   />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom align='center'>
                      Blog post
                    </Typography>
                    <Typography align='center'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, obcaecati.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    )
}
