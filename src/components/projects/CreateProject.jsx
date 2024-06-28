import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Grid, Box, Typography } from '@mui/material';
import { useSelector } from "react-redux";
import Organization from "../org/Organization";
import { useNavigate } from "react-router-dom";
export default function CreateProject() {
    const navigate = useNavigate()
    const [userId,setuserId]=useState('')
    const [token,settoken]=useState('')
    const organizations = useSelector((state)=>state.user.allorg.organizations)
  const [categ, setcateg] = useState();
  const [orgID, setOrgID] = useState('');
  
  const [project, setProject] = useState({
    title: '',
    description: '',
    location:'',
    start_date: '',
    end_date: '',
    volunteers_needed: '',
    category_id: '',
    organization_id:''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(orgID._id)
      await axios.post('https://neighbourly-backend.vercel.app/projects', project,
        {
        headers:{
          'access_token':token,
           'Content-Type': 'application/json'
        }});
      alert('Project created successfully!');
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project');
    }
  };
  useEffect(() => {
    const userid = localStorage.getItem('user_id')
    const access_token = localStorage.getItem('access_token')
    setuserId(userid)
    settoken(access_token)
    async function getCateg() {
      try {
        const response = await axios.get(
          "https://neighbourly-backend.vercel.app/categories"
        );
        setcateg(response.data);
      } catch (error) {
        alert("error fetching categories" + error);
      }
    }
    getCateg();
  }, []);
  useEffect(() => {
    if (userId && organizations) {
      const org = organizations.find((org) => org.user_id === userId);
      setOrgID(org ? org._id : '');
      setProject(prevProject => ({
        ...prevProject,
        organization_id: org ? org._id : ''
      }));
    }
  }, [userId, organizations]);

  return (
    <div className="p-10 flex flex-col justify-center items-center">
     
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Create New Project {orgID}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={project.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={project.location}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={project.description}
              onChange={handleChange}
              required
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Start Date"
              name="start_date"
              type="date"
              value={project.start_date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="End Date"
              name="end_date"
              type="date"
              value={project.end_date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Volunteers Needed"
              name="volunteers_needed"
              type="number"
              value={project.volunteers_needed}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category_id"
                value={project.category_id}
                onChange={handleChange}
                required
              >
                {categ?.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create Project
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
    </div>
    
  );
}
