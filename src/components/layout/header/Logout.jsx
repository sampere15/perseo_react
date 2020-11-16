import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

//  Material components
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../../redux/actions/authActions";

// Avatar and menu to logout
export default function Logout() {
  const { user } = useSelector(state => state.media);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  //  Redux
  const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //  Call action for sign out and delete auth token
  const logout = () => {
    //  Close menu
    setAnchorEl(null);
    //  Action to delete token and mark auth state as false
    dispatch(logoutAction());
    //  Link to login pagen
    history.push("/login");
  }

  return (
    <Grid item>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {user && user.avatar !== null && user.avatar !== undefined 
        ?
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Typography variant="h6">{user.name}</Typography>
            </Grid>
            <Grid item>
              <Avatar alt="Remy Sharp" src={user.avatar} />
            </Grid>
          </Grid>
        :
          <AccountCircle />
        }
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={logout}>Sign out</MenuItem>
      </Menu>
    </Grid >
  )
}
