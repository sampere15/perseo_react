import React, { useState } from 'react';

//  Redux
import { useDispatch, useSelector } from "react-redux";
import { filterItemsAction } from "../../../redux/actions/mediaActions";

//  Material components
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function Search() {
  const [typingTimeOut, setTypingTimeOut] = useState(null);
  const dispatch = useDispatch();
  const {filter} = useSelector(state => state.media);

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
        defaultValue={filter}
      />
    </Grid >
  )
}
