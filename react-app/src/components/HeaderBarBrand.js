import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderBarBrand = () => {
  const [brandName, setBrandName] = React.useState("MY SHOPPING LIST");

  React.useEffect(async () => {
    console.log("HeaderBarBrand component mounted");
    try {
      const response = await fetch("/api/httpHello?name=Static Web Apps - React App", {
        method: "GET",
        headers: {
          "Accept": "application/json",
        }
      });
      const data = await response.json();
      console.log("API Response:", data);
      setBrandName(`${data?.value} | ${data?.apiKey || "??"}` || "My Shopping List!!!");
    } catch (error) {
      console.error("Error fetching API:", error);
    }

    return () => {
      console.log("HeaderBarBrand component unmounted");
    };
  }, [])

  return (
    <div className="navbar-brand">
      <a
        className="navbar-item"
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab js-logo fa-react fa-2x" aria-hidden="true" />
      </a>
      <NavLink to="/" className="navbar-item nav-home">
        <span className="brand-first">{brandName}</span>
      </NavLink>
    </div>
  );
};

export default HeaderBarBrand;
