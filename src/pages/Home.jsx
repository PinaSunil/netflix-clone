import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Netflix Originals" fetchURL={requests.requestNetflixOriginal} type="series" />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming}  type="movie"/>
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} type="movie" />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} type="movie" />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} type="movie" />
      <Row rowID="5" title="Animation" fetchURL={requests.requestAnimation} type="movie" />
      <Row rowID="6" title="Horror" fetchURL={requests.requestHorror}  type="movie"/>
    </>
  );
};

export default Home;
