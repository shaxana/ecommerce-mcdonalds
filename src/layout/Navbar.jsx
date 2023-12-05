import React, { useContext } from "react";
// import Cristmas from "../../image/cristmas.png";
// import FooterLogo from "../../image/FooterLogo.jpg";
import "./../style/sass/navbar.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/UserAuth";
import { ThemeProvider } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  return (
    <div className="container">
      <header className="header-mc">
        <nav className="nav-mc">
          <div className="global-div-mc">
            <Link to="/">
              {" "}
              <img
                className="image-mc"
                src="https://mcdonalds.az/images/static/mcdonalds-logo.jpg"
                alt=""
              />
            </Link>

            <div className="wholeheader">
              <div className="top-headers">
                <div className="language">
                  <Button>Dil</Button>
                </div>
                <div className="email-div">
                  <Button>
                    <Link>E-məktublara abunəlik</Link>{" "}
                  </Button>
                </div>
                <div className="karier-div">
                  <Button>
                    <Link>Kariyera</Link>
                  </Button>
                </div>
              </div>
              <div className="end-header">
                <Button>
                  <Link to="/meals">Menyumuz</Link>
                </Button>
                <Button>
                  <Link to="/about">Yeməklərimiz haqqında</Link>
                </Button>
                <Button>
                  <Link to="/adress">Restoranların ünvanları</Link>
                </Button>
              </div>
            </div>
            <button className="header-btn">Indi sifariş edin</button>
          </div>
          <div className="profile">
            <div className="user">
              {!isLogin ? (
                <>
                  <Button>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button>
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button>
                    <Link
                      to="/login"
                      onSubmit={() => {
                        dispatch(logout());
                        
                      }}
                    >
                      Logout
                    </Link>
                  </Button>
                  <Button>
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </div>
            <div className="icns">
              <Button>
                <Link to="/wishlist">Wishlist</Link>
              </Button>
              <Button>
                <Link to="/cart">Cart</Link>
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
