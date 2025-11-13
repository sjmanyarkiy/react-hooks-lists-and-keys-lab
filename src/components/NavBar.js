import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLink = links.map((link, index) => {
    return <a key={index} href={"#"+link}
    >{link}</a>
  })

  return <nav>
    {navLink}
  </nav>;
}

export default NavBar;
