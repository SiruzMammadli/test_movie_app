import React from "react";
import movies from '../../api/movies.json';

const Header = () => {
  return (
    <>
      <header className="header">
            <div className="logo">MyMovies</div>
            <input type="text" placeholder="Search..." />
      </header>
    </>
  );
};

export default Header;
