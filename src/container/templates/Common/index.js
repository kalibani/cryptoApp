// Dashboard Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { Layout, Typography, Space } from "antd";
import { Header } from "components";
import "./styles.scss";

const Dashboard = ({ children }) => (
  <div className="app">
    <div className="header">
      <Header />
    </div>
    <div className="main">{children}</div>
    <div className="footer">main</div>
  </div>
);

Dashboard.propTypes = {
  children: PropTypes.element,
};

Dashboard.defaultProps = {
  children: "",
};

export default Dashboard;
