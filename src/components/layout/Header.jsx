import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";
import { filterItemsAction } from "../../redux/actions/mediaActions";

//  For layout
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export default function Header({showSearch = false}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const [typingTimeOut, setTypingTimeOut] = useState(null);

  //  Redux
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.media);

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

  //  Filter items
  const filterChanged = e => {
    //  If user continues typing we clear the timer configured and create a new one
    if(typingTimeOut) {
      clearTimeout(typingTimeOut);
    }

    //  We call action when 1 second has passed from last type
    setTypingTimeOut(setTimeout(() => {
      dispatch(filterItemsAction(e.target.value));
    }, 500));
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>
              <Link className="home-link" to="/">
                <Typography variant="h5">
                  Perseo TV
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <div>
                {/* Grid to search and avatar items */}
                <Grid container direction="row" justify="flex-end" alignItems="center">
                  {showSearch &&
                    <Grid item>
                      <Input
                        className="input-search"
                        id="input-with-icon-adornment"
                        placeholder="Search..."
                        size="small"
                        onChange={filterChanged}
                        startAdornment={
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        }
                      />
                    </Grid >
                  }
                  {/* Avatar and menu to logout */}
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
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  showSearch: PropTypes.bool
}