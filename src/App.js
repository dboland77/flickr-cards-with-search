import Container from "./components/MainContainer/Container";
import CardGrid from "./components/CardGrid/CardGrid";
import SearchBar from "./components/SearchBar/SearchBar";

import { React, useEffect } from "react";
import { useDispatch } from "react-redux";

//eslint-disable-next-line
import { fetchPhotos } from "./components/PhotoCard/PhotoCardSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchPhotos())
  }, [dispatch])

  return (
    <Container>
      <SearchBar />
      <CardGrid />
    </Container>
  );
}

export default App;
