import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//  Material components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//  Self components
import Search from "./Search";
import Logout from "./Logout";

export default function Header({showSearch = false}) {
  return (
    <div className="div-header">
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
                    <Search />
                  }
                  <Logout />
                  
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