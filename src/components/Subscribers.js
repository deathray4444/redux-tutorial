import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux/";

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className="items">
      <h2>구독자 수 : {count}</h2>
      <button onClick={() => addSubscriber()}>구독하기!</button>
    </div>
  );
};

const mapStateToProps = ({ subscribersReducer }) => {
  return {
    count: subscribersReducer.count,
  };
};

const mapDispatchtoProps = {
  addSubscriber,
};

export default connect(mapStateToProps, mapDispatchtoProps)(Subscribers);
