import React, { useState } from 'react';
import {
  makeStyles,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Box,
  Grid,
  alpha,

} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuBar from './MenuBar';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
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
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

}));




function ListaDeDesejos () {
  const classes = useStyles();
  const [favorites, setFavorites] = useState( JSON.parse(localStorage.getItem ("wishList")) || [] );

  function favorite (product){
    const prevProducts = JSON.parse(localStorage.getItem ("wishList")) || []
    const alreadyExist = prevProducts.some( (item) => (item.id===product.id) )
    console.log (alreadyExist)
    if (alreadyExist){
      const newList = (prevProducts.filter((item) => (item.id!==product.id)))
      localStorage.setItem ("wishList", JSON.stringify(newList))
      setFavorites(newList)
    }
    else{
      const newList = (prevProducts.concat(product))
      localStorage.setItem ("wishList", JSON.stringify(newList))
      setFavorites(newList)
    }
  

  };

  return (
    <div className={classes.root}>
    <MenuBar color='secondary' className={classes.appBar}>
      <Toolbar>
        <div className={classes.menuIcon}/>
        
        <Button color= 'inherit'
          startIcon={<FavoriteIcon />}
          Typography variant='h3'
          
          >
          MagaNets
      
         
        </Button>
     
        <IconButton
          edge='start'
          className={classes.menuIcon}
          aria-label='menu'
        >
        </IconButton>
        <div className={classes.grow} />

         <Button color = 'inherit' 
          startIcon={<LocationOnIcon />}

        >
        Cidade: São Paulo
        </Button>
        <div className={classes.grow} />
        <Button color =  'inherit'
          startIcon={<PhoneIcon />}

        >
         Central de atendimento
        </Button>
        <div className={classes.grow} />
        <Button color= 'inherit'
          startIcon={<FavoriteIcon />}

        >
         Lista de desejos
        </Button>
      </Toolbar>
    </MenuBar>
    <Box display='flex'>
  

      <Box p={8}>
        <Toolbar />
        <Typography
          variant='h5'
          color='textPrimary'
          style={{ fontStyle: 'bold',
           fontWeight: 600 }}
        >
          Home - Lista de desejos
        </Typography>

        <Grid container spacing={4}>
          {favorites.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box>
              <FormControlLabel checked = {favorites.some( (product) => (item.id===product.id))} onChange ={() => favorite (item)}
      control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}

    /> 
                <img
                  style={{ width: '100%' }}
                  alt={item.title}
                  src={item.image}
                />
                <Box>
                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant='body1'
                    color='textPrimary'
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    display='block'
                    variant='body2'
                    color='textSecondary'
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {`${item.views} • ${item.date}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </div>
);
}


export default ListaDeDesejos;
