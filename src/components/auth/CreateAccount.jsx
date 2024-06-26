import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { redirect,useNavigate } from "react-router-dom";
import Select from '@mui/material/Select';
import axios from 'axios';
import { useState } from "react";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#272342'),
  backgroundColor: '#272342',
  '&:hover': {
    backgroundColor: '#272342',
  },
}));

const CreateAccount = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
const navigate = useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
     console.log(username)

      const userData = {
        username: username,
        email: email,
        password: password,
        role:role
      };
  
      try {
        const response = await axios.post('https://neighbourly-backend.vercel.app/auth/register', userData);
  
        if (response.status === 200) {
            navigate(`/${role}`);
            localStorage.setItem('access_token',response.data.token)
          console.log('Signup successful:', response.data.token);
        } else {
            alert(response.data)
          console.error('Signup failed:', response.data);
        }
      } catch (error) {
        alert(error+'biuvbui')
        console.error('Error:', error);
      }
    };
  return (
    <div className="bg-body w-full h-[100vh] flex ">
      <div className="hidden md:flex w-[40%]">
        <p className="text-[2.2rem] text-black font-semibold mt-24 ml-12 ">Discover amazing <br />events. <br /> Sign up for personalized <br />recommendations <br /> today!</p>
      </div>
      <div className=" bg-white w-[100%] rounded-l-[2rem] md:w-[60%]">
        <h1 className="text-3xl font-sens font-semibold text-center  mt-16">
          Create Account
        </h1>
        <div  className="pt-10  flex md:justify-center  ">
          <Box
            component="form"
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
            noValidate
            autoComplete="off"
          >  
            <div className="p-5">
            <TextField fullWidth
              id="outlined-password-input"
              label="Full Name"
              type="text"
              autoComplete="current-password"
              onChange={(e)=>setName(e.target.value)}
            />
            </div>
            <div className="p-5">
            <TextField fullWidth
              id="outlined-password-input"
              label="E-mail Address"
              type="text"
              autoComplete="current-password"
              onChange={(e)=>setEmail(e.target.value)}
            />
            </div >
            <div className="p-5">
              <TextField fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            
            </div>
            <div className="p-5">
            <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Role"
          onChange={(e)=>setRole(e.target.value)}
        >
          <MenuItem value={'volunteer'}>volunteer</MenuItem>
          <MenuItem value={'organization'}>organization</MenuItem>
         
        </Select>
      </FormControl>
            </div>
          </Box>
        </div>
        <div className="flex justify-center"><ColorButton variant="contained" onClick={handleSubmit}> <h2 className="px-10 sm:px-36  py-2">Create Account</h2> </ColorButton></div>
        <p className="flex justify-center p-5" >Already have an account? <b><a href="">Log In</a></b></p>
      </div>
    </div>
  );
};

export default CreateAccount;