import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import './../../style/sass/meals.scss'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Meals() {
  let [meals, setMeal] = useState([])
   useEffect(()=>{
    axios("http://localhost:3000/meals").then((res)=>{
      setMeal(res.data)
    })
  },[])
  return (
    <>
    <Container>
  
      <Grid container spacing={2}>
  <Grid item xs={2}>
  <div className="sidenavs">
          <div className="sevimliler">
            <img
              className="sevimlimg"
              src="https://mcdonalds.az/images/static/full_menu.jpg"
              alt=""
            />
            <h6>Müştəri sevimliləri</h6>
          </div>
          <div className="meals">
            <div className="sortdiv">
              <img
              className="sevimlimg"
                src="https://mcdonalds.az/images/5d61dc895b83f47eafc0f6cbfb353bad.png"
                alt=""
              />
              <h6>Burgerlər</h6>
            </div>
          
            <div className="sortdiv">
              <img
              className="sevimlimg"
                src="https://mcdonalds.az/images/bf93706e65a4eb7a0bec356f94053f4e.jpg"
                alt=""
              />
              <h6>İçkilər</h6>
            </div>

            <div className="sortdiv">
              <img
              className="sevimlimg"
                src="https://mcdonalds.az/images/867cff5309d79402a604b6b8b6f6fcce.jpg"
                alt=""
              />
              <h6>Happy Meal</h6>
            </div>

            <div className="sortdiv">
              <img
              className="sevimlimg"
                src="https://mcdonalds.az/images/d53a391310a492a79740d611bbfd53b9.jpg"
                alt=""
              />
              <h6>Qəlyanaltılar</h6>
            </div>

            <div className="sortdiv">
              <img
              className="sevimlimg"
                src="https://mcdonalds.az/images/5226794fdd6873f66f37ae0397286b8c.png"
                alt=""
              />
              <h6>Salatlar</h6>
            </div>

            <div className="sortdiv">
              <img
              className="sevimlimg"
                src="https://mcdonalds.az/images/5465ab8529156a71e76c3d569863862b.png"
                alt=""
              />
              <h6>Souslar</h6>
            </div>

            <div className="sortdiv" style={{ display: "flex" }}>
              <img
              className="sevimlimg"
                src="https://mcdonalds.az/images/fed86781205af0e755e7553dbf0da55b.jpg"
                alt=""
              />
              <h6>Şirniyyat və kokteyllər</h6>
            </div>

            <div className="sortdiv" style={{ display: "flex" }}>
              <img
              className="sevimlimg"
                src="https://mcdonalds.az/images/decdafe4e7aa96fbb17420635b19eec3.jpg"
                alt=""
              />
              <h6>İsti içkilər</h6>
            </div>

            <div className="sortdiv">
              <img
              className="sevimlimg"
                src="https://mcdonalds.az/images/879d7da33c37647f84a6a22e87c658b3.png"
                alt=""
              />
              <h6>Mc Cafe®</h6>
            </div>
          </div>
        </div>
  </Grid>
  <Grid item xs={10}>
      <div className="cards">
              <h1 className="cardsmealheading">Burgerlər</h1>
              <Grid container spacing={2}>
  {
    meals && meals.map((meal)=>{
      return   <Link to={"/meals/" + meal.id}>
       <Grid  item xs={4}>
                  <div className="card">
                    <img
                      src={meal.image}
                      alt=""
                      width={300}
                      className="meal-image"
                      
                    />
                    <p className="mealname">{meal.name}</p>
                  </div>
                </Grid>
                </Link>
          
    })
  }
                </Grid>

 </div>
      </Grid>
</Grid>
     
      
      </Container>
    </>
  );
}

export default Meals;
