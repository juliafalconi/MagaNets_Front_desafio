import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Toolbar,
  Typography,
  Box,
  Grid,
  alpha,

} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
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


function Home() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState( JSON.parse(localStorage.getItem ("wishList")) || [] );

  useEffect(function () {
    fetch("https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e").then(Response => Response.json()).then(Response => setProducts (Response.products))

  },
    []

  );
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
      <MenuBar>

      </MenuBar>
      
      <Box display='flex'>


        <Box p={8}>
          <Toolbar />
          <Typography
            variant='h5'
            color='textPrimary'
            style={{
              fontStyle: 'bold',
              fontWeight: 600
            }}
          >
            Home - Produtos
          </Typography>

          <Grid container spacing={4}>
            {products.map((item, index) => (
              <Grid key={item.id} item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <div style = {{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                     <FormControlLabel checked = {favorites.some( (product) => (item.id===product.id))} onChange ={() => favorite (item)}
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}

                  />
      
                  </div>
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


export default Home;
