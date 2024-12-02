import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Logo</h1>
      <ul>
        <li>
          <a href="#">Courses</a>
        </li>
        <li>
          <a href="#">Instructions</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <section>
        <Image alt="" height={50} width={50} src="/icons/bag.svg" />
        <button>Login</button>
      </section>
    </nav>
  );
};

export default Navbar;
