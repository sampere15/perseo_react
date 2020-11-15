import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";

//  For layout
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

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
    //  Redirect to login pagen
    history.push("/login");
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h5">
                Perseo TV
              </Typography>
            </Grid>
            <Grid item>
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  {user && user.avatar !== null && user.avatar !== undefined ?
                      // <Avatar alt="Remy Sharp" src={user.avatar} />
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
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>

    //  <div className={classes.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography variant="h5" className={classes.title}>
    //         Perseo TV
    //       </Typography>
    //       {true && (
    //         <div>
    //           <IconButton
    //             aria-label="account of current user"
    //             aria-controls="menu-appbar"
    //             aria-haspopup="true"
    //             onClick={handleMenu}
    //             color="inherit"
    //           >
    //             {user && user.avatar !== null && user.avatar !== undefined ?
    //                 // <Avatar alt="Remy Sharp" src={user.avatar} />
    //                 <Grid container direction="row" alignItems="center">
    //                   <Grid item>
    //                     <Typography variant="h6">{user.name}</Typography>
    //                   </Grid>
    //                   <Grid item>
    //                     <Avatar alt="Remy Sharp" src={user.avatar} />
    //                   </Grid>
    //                 </Grid>
    //             :
    //               <AccountCircle />
    //             }
    //           </IconButton>
    //           <Menu
    //             id="menu-appbar"
    //             anchorEl={anchorEl}
    //             anchorOrigin={{
    //               vertical: 'top',
    //               horizontal: 'right',
    //             }}
    //             keepMounted
    //             transformOrigin={{
    //               vertical: 'top',
    //               horizontal: 'right',
    //             }}
    //             open={open}
    //             onClose={handleClose}
    //           >
    //             <MenuItem onClick={logout}>Sign out</MenuItem>
    //           </Menu>
    //         </div>
    //       )}
    //     </Toolbar>
    //   </AppBar>
    // </div>
  );
}