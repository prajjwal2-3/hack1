import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function BasicMenu() {
    const user = useSelector((state)=>state.user.user.name)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='flex flex-col'
      >
        <AccountCircleIcon/>
        {user}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         
        <Link><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
        <Link to="/myOrg"><MenuItem onClick={handleClose}>My Organization</MenuItem></Link>
        <MenuItem>
         <button
              className=" "
              onClick={handleLogout}
            >
              Sign Out
            </button>
         </MenuItem>
      </Menu>
    </div>
  );
}
