import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#272342'),
  backgroundColor: '#272342',
  '&:hover': {
    backgroundColor: '#272342',
  },
}));

const CreateAccount = () => {
  return (
    <div className="bg-body w-full h-[100vh] flex ">
      <div className="hidden md:flex w-[40%]">
        <p className="text-[2.2rem] text-white font-semibold mt-24 ml-12 ">Discover amezing <br />events. <br /> Sign up for personalized <br />recommendations <br /> today!</p>
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
            />
            </div>
            <div className="p-5">
            <TextField fullWidth
              id="outlined-password-input"
              label="E-mail Address"
              type="text"
              autoComplete="current-password"
            />
            </div >
            <div className="p-5">
              <TextField fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            </div>
    
          </Box>
        </div>
        <div className="flex justify-center"><ColorButton variant="contained"> <h2 className="px-10 sm:px-36  py-2">Create Account</h2> </ColorButton></div>
        <p className="flex justify-center p-5" >Already have an account? <b><a href="">Log In</a></b></p>
      </div>
    </div>
  );
};

export default CreateAccount;
