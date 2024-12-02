import About from "@/components/About";
import Banner from "@/components/Banner";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
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
        <Review />
      </main>
      <Footer />
    </main>
  );
};

export default Home;
