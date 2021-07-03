import React, {useContext, useEffect } from 'react';
import { UserContext } from '../utils/UserContext';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import '../../src/App.css';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import BrowseIcon from '@material-ui/icons/FindInPage';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import BuildIcon from '@material-ui/icons/Build';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import MailIcon from '@material-ui/icons/Mail';
import { Redirect, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
      console.log('Value: ', userInfo)
  }, [userInfo])

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log('UserInfo: ',userInfo);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getIcon = (page) => {
    // switch if page === work return icon
    switch (page) {
    case 'Home Page':
        return <HomeIcon/>
        // break;
    case 'Admin Tasks':
        return <BuildIcon/>
        // break;
    case 'Book':
        return <MailIcon/>
        // break;
    case 'Browse Tours':
        return <BrowseIcon/>
        // break;
    case 'Login':
        return <MailIcon/>
        // break;
    case 'My Stuff':
        return <EmojiPeopleIcon/>
        // break;
    case 'Operator':
        return <MailIcon/>
        // break;
    case 'Tour':
        return <MailIcon/>
        // break;
    case 'All Tours':
        return <DynamicFeedIcon/>
        // break;
      default: 
        return <MailIcon/>
    }
  }

  
  const history = useHistory();

  const setPage = (page) => {
      console.log("I'm in setPage",page);
    //   history.push("/about");
      history.push(`/${page}`);
      return
  }

  const userPages = [{'text':'Home Page','menuPath':'home'},{'text':'Browse Tours','menuPath':'browse'},{'text':'My Stuff','menuPath':'mystuff'}];
  
  const adminPages = [{'text':'Home Page','menuPath':'home'},{'text':'Browse Tours','menuPath':'browse'}, {'text':'Admin Tasks','menuPath':'admin'}, {'text':'All Tours','menuPath':'touradmin'}, {'text':'Operator Admin','menuPath':'operator'}, {'text':'Tour Page TEMP','menuPath':'tour'}];
  
  if(userInfo === "ADMIN") {
      var Pages = adminPages
  } else {
      var Pages = userPages
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            {/* I am text in teh blue bar at the top. */}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
      </main>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {Pages.map(({text, menuPath}, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{getIcon(text)}</ListItemIcon>
              <ListItemText primary={text}
              onClick={() => {
                setPage(menuPath);
            }
            } />
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {adminPages.map(({text, menuPath}, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{getIcon(text)}</ListItemIcon>
              <ListItemText 
                primary={text} 
                onClick={() => {
                    setPage(menuPath);
                }
                }
                />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </div>
  );
}

