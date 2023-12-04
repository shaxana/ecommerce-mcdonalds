import  React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/UserAuth';


 function Navbar() {
    const  {isLogin, setIsLogin} = useContext(UserAuth)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{display:"flex", justifyContent:"space-between"}}>
          
          <Box>
          <Button color="inherit"><Link to="/">Home</Link></Button>
          <Button color="inherit"><Link to="/products">Products</Link></Button>
         </Box>
         <Box>
            {/* {
                !isLogin ? <>
                  <Button color="inherit"><Link to="/login">Login</Link></Button>
          <Button color="inherit"><Link to="/register">Register</Link></Button>
                </> :
          <Button color="inherit"><Link to="/">Log Out</Link></Button>

            }
         */}
         <Button><Link to="/login">Log in</Link></Button>
         <Button><Link to="/register">Register</Link></Button>
         </Box> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar



