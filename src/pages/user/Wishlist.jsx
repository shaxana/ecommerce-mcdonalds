import React, { useState } from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Card, CardMedia, CardContent, Typography, CardActions, } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { addToFavorite } from "../../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
const Wishlist = () => {
  const dispatch = useDispatch()
  
  const favItems = useSelector(state => {   
    return state.login.wishlist;  
  });
  
  const {
    // isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    // emptyCart,
  } = useCart();

  return (
    <Container className="py-4 mt-5">
      <h1
        
      >
        {/* {isEmpty ? "Your Cart is Empty" : "The Cart"} */}
      </h1>
      <Container className="py-4 mt-5">
      <Grid container spacing={3}>
      {
         favItems.map((favItem)=> {  
     return      (
    <Grid item xs={4} key={favItem.id}>
    <Card sx={{ maxWidth: 345 }} style={{marginLeft:50}}>
    <FontAwesomeIcon icon={faHeart} style={{marginLeft:310, color:'red'}}  />
   
        <CardMedia
          sx={{ height: 140 }}
          image={favItem.image}
          
          style={{width:200, margin:"0 auto"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {favItem.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{marginLeft:110}}>
           {favItem.description}
          </Typography>
        </CardContent>
        <button style={{backgroundColor:'gold', padding:10, width:120, border:"none", borderRadius:8 , marginLeft:200, marginBottom:20 }}
                  variant="danger"
                  className="m-2"
                  // onClick={() => emptyCart()}
                >
                  <BsCartX size="1.7rem" />
                  Add to Cart
                </button>
      </Card>
    </Grid>
    )
  
  })
 }
 
  

       </Grid>
        {/* {!isEmpty && ( */}
          <Row
            style={{ position: "fixed", bottom: 0 }}
           
          >
            <div style={{display:"flex"}}>
           <div>
              <h1>Total Price: Rs. {cartTotal}</h1>
            </div>
            <div  >
              
              <button variant="success" className="m-2" style={{backgroundColor:'gold', padding:10, width:150, border:"none", borderRadius:8 , marginLeft:200 }}>
                <BsCartCheck size="1.7rem" />
                Clear All
              </button>
            </div></div>
          </Row>
        {/* )} */}
      </Container>
    </Container>
  );
};

export default Wishlist;