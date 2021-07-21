import React from 'react';
import {
  makeStyles,
  Toolbar,
  AppBar,
  IconButton,
  Button,
  Typography,
  alpha,

} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useHistory } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',

  },
  appBar: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingTop : theme.spacing(5),
  },
  logo: {
    height: 25,
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingTop : theme.spacing(5),
  
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '50%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    sectionNav: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
  },

}}));



function MenuBar() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar color='secondary' className={classes.appBar}>
        <Toolbar>
           <div className={classes.menuIcon} />
           <Button startIcon={<HomeOutlinedIcon />} 
             color= 'inherit'
            onClick={() => history.push('/')}
          ></Button>
            <Typography variant='h5' noWrap color='inherit' startIcon={<HomeOutlinedIcon />}>
            MagaNets
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionNav}>
             <div style = {{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <IconButton
            edge='start'
            className={classes.menuIcon}
            aria-label='menu'
          >
          </IconButton>

          <Button color='inherit'
            startIcon={<LocationOnIcon />}

          >
            Cidade: São Paulo
          </Button>
          <div className={classes.grow} />
          <Button color='inherit'
            startIcon={<PhoneIcon />}

          >
            Central de atendimento
          </Button>
          <div className={classes.grow} />
          <Button color='inherit'
            startIcon={<FavoriteIcon />}
            className={classes.button}
            onClick={() => history.push('/Lista')}>
            Lista de desejos
          </Button>
          </div>
        
          <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            color='inherit'
            placeholder="Busca"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          /> 
        </div>
          </div>
        </Toolbar>
      </AppBar>
    )
};

export default MenuBar;