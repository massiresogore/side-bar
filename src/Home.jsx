import React from "react";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();
  console.log(openModal);
  return <div>Home</div>;
};

export default Home;
