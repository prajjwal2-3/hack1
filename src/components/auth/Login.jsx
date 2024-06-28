import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/user/user";
import { addOrg } from "../../redux/org/org";
import { addVolunteer } from "../../redux/user/volunteer";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#272342"),
  backgroundColor: "#272342",
  "&:hover": {
    backgroundColor: "#272342",
  },
}));

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.name);
  useEffect(() => {
    if (user.name) {
      if (user.role === "organization") {
        navigate("/organization");
      } else if (user.role === "volunteer") {
        navigate("/volunteer");
      }
    }
  }, [user, navigate]);
  async function login(e) {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://neighbourly-backend.vercel.app/auth/login",
        userData
      );

      if (response.status === 200) {
        const user_id = response.data.user_id;
        localStorage.setItem("user_id", response.data.user_id);
        localStorage.setItem("access_token", response.data.token);
        try {
          const token = localStorage.getItem('access_token')
          console.log(token)
          const user = await axios.get(
            `https://neighbourly-backend.vercel.app/users/${user_id}`,
            
            {
              headers: {
                access_token:token
              },
            }
          );
          const User = {
            name: user.data.username,
            email: user.data.email,
            role: user.data.role,
            id: user.data._id,
          };
          dispatch(addUser(User));
          if (user.data.role === "organization") {
            try{
              const organization = await axios.get(`https://neighbourly-backend.vercel.app/organizations/users/${user_id}`)
              const org = {
                name:organization.data.name,
                description:organization.data.description,
                email:organization.data.contact_email,
                phone:organization.data.contact_phone,
                address:organization.data.address,
                website:organization.data.website
              }
              dispatch(addOrg(org))
              navigate("/organization");
            }catch(error){
              alert(error+'error fetching organization details')
            }
            
          } else {
            try{
              const access_token = localStorage.getItem('access_token');
              const volunteer = await axios.get(`https://neighbourly-backend.vercel.app/volunteers/users/${user_id}`,{
                headers:{
                  'access_token':access_token
                }
              })
            const volun = {
              name:user.data.username,
              user_id:user_id,
              bio:volunteer.data.bio,
              skills:volunteer.data.skills,
              availability:volunteer.data.availability
            }
            dispatch(addVolunteer(volun))
            navigate("/volunteer");
            }catch(error){
              alert(error+'error fetching volunteer details')
            }
          }
        } catch (error) {
          alert(error + "error fetch user details");
        }
      }
    } catch (error) {
      alert(error + "error logging in");
    }
  }

  return (
    <div className="bg-body w-full h-[100vh] flex ">
      <div className="hidden md:flex w-[40%]">
        <p className="text-[2.2rem] text-black font-semibold mt-24 ml-12 ">
          Welcome back! <br /> Login for personalized <br />
          recommendations <br /> today!
        </p>
      </div>
      <div className=" bg-white w-[100%] rounded-l-[2rem] md:w-[60%]">
        <h1 className="text-3xl font-sens font-semibold text-center  mt-16">
          Login
        </h1>
        <div className="pt-10  flex md:justify-center  ">
          <Box
            component="form"
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
            noValidate
            autoComplete="off"
          >
            <div className="p-5">
              <TextField
                fullWidth
                id="outlined-password-input"
                label="E-mail Address"
                type="text"
                autoComplete="current-password"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="p-5">
              <TextField
                fullWidth
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </Box>
        </div>
        <div className="flex justify-center">
          <ColorButton variant="contained" onClick={login}>
            {" "}
            <h2 className="px-10 sm:px-36  py-2">Login</h2>{" "}
          </ColorButton>
        </div>
        <p className="flex justify-center p-5">
          Don't have an account?{" "}
          <b>
            <a href="">Sign up</a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Login;
