import { BottomNavigation, BottomNavigationAction, Typography } from "@material-ui/core";
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestoreIcon from '@material-ui/icons/Restore';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1
    }
}));

export const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = useState('recents');
    const handleChange = (_event: React.ChangeEvent<{}>, value: any) => {
        setValue(value);
    };

    return (
        <footer>
            <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}>
                    <BottomNavigationAction
                    label='Recents'
                    value='recents'
                    icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                    label='Favorites'
                    value='favorites'
                    icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                    label='Nearby'
                    value='nearby'
                    icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction
                    label='Folder'
                    value='folder'
                    icon={<FolderIcon />}
                />
            </BottomNavigation>
            <Typography align='center' component='p' color='textSecondary' variant='subtitle1'>
            React + TS + Material UI site
            </Typography>
      </footer>
    )
}