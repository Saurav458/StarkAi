import React from "react";
import Section from "./Section";
import Footer from "./Footer";
import TimeLine from "./TimeLine";
const Home = () => {
  return (
    <div className="bg-white">
      <TimeLine />
      <Section />
      <Footer />
    </div>
  );
};

export default Home;
