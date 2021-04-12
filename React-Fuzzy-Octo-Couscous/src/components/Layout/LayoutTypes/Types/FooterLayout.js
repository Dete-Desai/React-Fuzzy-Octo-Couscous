import React from "react";
import PropTypes from "prop-types";
// import { useHistory, usehistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';

//Importing the core components
import Navbar from "../../CoreComponents/DashboardMainComponents/Navbar";
import Sidebar from "../../CoreComponents/DashboardMainComponents/Sidebar";
import Footer from "../../CoreComponents/DashboardMainComponents/Footer";

const FooterLayout = ({ children, noNavbar, noSidebar, noFooter }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {!noNavbar && <Navbar />}
        {!noSidebar && <Sidebar />}
        {children}
        {!noFooter && <Footer />}
      </div>
    </div>
  );
};

FooterLayout.propTypes = {
    //Function to display the core components
    noNavbar: PropTypes.bool,
    noSidebar: PropTypes.bool,
    noFooter: PropTypes.bool,
};

FooterLayout.defaultProps = {
    noNavbar: true,
    noSidebar: true,
    noFooter: false,
};

export default FooterLayout;
