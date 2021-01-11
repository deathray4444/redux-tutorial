import React from "react";
import { connect } from "react-redux";

const Display = ({ count }) => {
  return (
    <div>
      <p>구독자 수 : {count}</p>
    </div>
  );
};
const mapStateToProps = ({ subscribersReducer }) => {
  return {
    count: subscribersReducer.count,
  };
};

export default connect(mapStateToProps)(Display);
