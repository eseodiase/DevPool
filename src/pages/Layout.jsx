import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/intern">Internship Jobs</Link>
          </li>
          <li>
            <Link to="/front-end">Front-end Developer Jobs</Link>
          </li>
          <li>
            <Link to="/full-stack">Full-stack Developer Jobs</Link>
          </li>
          <li>
            <Link to="/engineer">Software Engineer Jobs</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
