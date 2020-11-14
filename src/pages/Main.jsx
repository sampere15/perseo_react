import React, { useEffect } from 'react';
import Header from "../components/layout/Header";
import MediaList from "../components/media/MediaList";

//  Material Components
import Container from "@material-ui/core/Container";

//  Redux
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../redux/actions/mediaActions";

export default function Main() {
  const dispatch = useDispatch();
  const { files, user } = useSelector(state => state.media);


  // useEffect(() => {
  //   dispatch(getFiles());
  // }, []);
  
  return (
    <div>
      <Header />
      <Container>
        <MediaList 
          title="Favourites"
          files={files.filter( file => user.favs.includes(file.id))}
        />
        {/* <MediaList 
          title="Recently"
          files={files.filter( file => user.lastShowed.includes(file.id))}
        />
        <MediaList 
          title="All"
          files={files}
        /> */}
      </Container>
    </div>
  )
}
