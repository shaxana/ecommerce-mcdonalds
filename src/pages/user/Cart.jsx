import React from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Card, CardMedia, CardContent, Typography, CardActions, } from "@mui/material";
import { left } from "@popperjs/core";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const {
    // isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    // emptyCart,
  } = useCart();

  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.cart.items)

  return (

    <Container className="py-4 mt-5">
      <h1
        
      >
        {/* {isEmpty ? "Your Cart is Empty" : "The Cart"} */}
      </h1>
      <Row className="justify-content-center">
      <Grid container spacing={2}>
        {cartItems.map((cartItem)=>{
return <Grid item xs={4}>
<Card sx={{ maxWidth: 345 }} style={{marginLeft:50}}>
    <CardMedia
      sx={{ height: 140 }}
      image="https://mcdonalds.az/images/d8435c28c90f173578fe8be07fc3f8f1.png"
      title="green iguana"
      style={{width:200, margin:"0 auto"}}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        meals name
      </Typography>
      <Typography variant="body2" color="text.secondary" style={{marginLeft:110}}>
        meals description
      </Typography>
    </CardContent>
    <CardActions>
      <button style={{backgroundColor:'gold', padding:10, width:100, border:"none", borderRadius:8 , marginLeft:200 }} size="small"> Delete</button>
        </CardActions>
  </Card>
</Grid>
        })}
      
  
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
              <button style={{backgroundColor:'gold', padding:10, width:150, border:"none", borderRadius:8 , marginLeft:200 }}
                variant="danger"
                className="m-2"
                // onClick={() => emptyCart()}
              >
                <BsCartX size="1.7rem" />
                Clear Cart
              </button>
              <button variant="success" className="m-2" style={{backgroundColor:'gold', padding:10, width:150, border:"none", borderRadius:8 , marginLeft:200 }}>
                <BsCartCheck size="1.7rem" />
                Clear Cart
              </button>
            </div></div>
          </Row>
        {/* )} */}
      </Row>
    </Container>
  );
};

export default Cart;