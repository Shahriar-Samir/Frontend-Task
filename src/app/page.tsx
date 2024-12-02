import About from "@/components/About";
import Banner from "@/components/Banner";
import Courses from "@/components/Courses";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <main>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Courses />
        <About />
      </main>
    </main>
  );
};

export default Home;
