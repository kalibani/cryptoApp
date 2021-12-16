// Dashboard Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import { Common } from "container/templates";
// import "./styles.css";

const Dashboard = ({ propsName }) => <Common>children</Common>;

Dashboard.propTypes = {
  propsName: PropTypes.string,
};

Dashboard.defaultProps = {
  propsName: "",
};

export default Dashboard;
