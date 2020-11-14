import React, { useEffect } from 'react';

import Header from "../components/layout/Header";

//  Redux
import { useDispatch} from "react-redux";
import { getFiles } from "../redux/actions/mediaActions";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFiles());
  }, []);
  
  return (
    <div>
      <Header />
      <h1>Main</h1>
    </div>
  )
}
