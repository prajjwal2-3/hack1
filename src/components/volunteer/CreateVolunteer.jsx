import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Grid, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function CreateVolunteer() {
    const navigate = useNavigate()
  const [volunteerDetails, setVolunteerDetails] = useState({
    bio: '',
    skills: '',
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVolunteerDetails({ ...volunteerDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem("user_id");
    const access_token = localStorage.getItem("access_token");
    
    const volunteerData = { ...volunteerDetails, user_id };

    try {
      await axios.post('https://neighbourly-backend.vercel.app/volunteers/', volunteerData, {
        headers: {
          'access_token': access_token,
          'Content-Type': 'application/json'
        }
      });
     
      alert('Volunteer details submitted successfully!');
      navigate('/volunteer')
    } catch (error) {
      console.error('Error submitting volunteer details:', error);
      alert('Failed to submit volunteer details');
    }
  };

  return (
    <div className="p-10 flex flex-col justify-center items-center">
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Volunteer Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Bio"
                name="bio"
                value={volunteerDetails.bio}
                onChange={handleChange}
                required
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Skills"
                name="skills"
                value={volunteerDetails.skills}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Availability"
                name="availability"
                value={volunteerDetails.availability}
                onChange={handleChange}
                required
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}
