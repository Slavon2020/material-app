import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(1)
    },
    logo: {
      flexGrow: 1
    },
}));

export const Nav = () => {
    const classes = useStyles();
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    const handleClose = () => {
      setIsFormOpen(false);
    }

    const handleOpen = () => {
      setIsFormOpen(true);
    }
    
    return (
        <AppBar position='fixed'>
          <Container fixed>
            <Toolbar>
              <IconButton className={classes.menuButton} edge='start' color='inherit' aria-label='menu'>
                <MenuIcon />
              </IconButton>
              <Typography className={classes.logo} variant='h6'>
                Logo
              </Typography>
              <Box mr={3}>
                <Button onClick={handleOpen} color='inherit' variant='outlined'>Log in</Button>
              </Box>
              <Button color='secondary' variant='contained'>Sign up</Button>
            </Toolbar>
          </Container>
          <LoginForm isFormOpen={isFormOpen} handleClose={handleClose} />
        </AppBar>
    )
}