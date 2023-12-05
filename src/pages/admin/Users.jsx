import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { border, width } from '@mui/system';


function Users() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(er => console.log(er));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = data.length + 1;
    axios.post('http://localhost:3000/users',
      { id: id, name: name, password: password })
      .then(res => {
        location.reload()
      })
      .catch(er => console.log(er));


  };

  return (
    <div className='container' style={{ margin:"0 auto", display:"block", }}>
      <div>
        <form style={{width:"40%",height:"40px",margin:"0 auto", padding:"20px"}} onSubmit={handleSubmit} >
          <input style={{width:"38%",height:"40px"}}  type="text" placeholder='Enter Name' value={name} onChange={e => setName(e.target.value)} />
          <input style={{width:"38%",height:"40px"}} type="text" placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)} />
          <button  type="submit" style={{ background: "green", width:"60px",height:"40px" }}>Add</button>
        </form>
      </div>
      <table style={{background:"white",margin:'0 auto',marginTop:'5  0px', width:"1200px", height:"100vh", border:"1px solid black",}}>
        <thead style={{background:"white"}}>
          <tr style={{fontSize:"25px"}}>
            <th>ID</th>
            <th>Name</th>
            <th>Password</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          {data && data.map((user, index) => (
            <tr key={index} >
              <td style={{fontSize:"25px", textAlign:"center"}}>{user.id}</td>
              <td style={{fontSize:"25px", textAlign:"center"}}>{user.name}</td>
              <td style={{fontSize:"25px", textAlign:"center"}}>{user.password}</td>
              <td style={{fontSize:"25px", textAlign:"center"}}>{user.balance}</td>
              <td style={{textAlign:"center"}}>
                <button style={{ fontSize:"20px", background: "yellow",  width:"60px",height:"40px"}}>Edit</button>
                <button style={{ fontSize:"20px",background: "red" ,  width:"60px",height:"40px"}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;