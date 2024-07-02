import React, { Component } from "react";
import "./Lazyload.css";
const ThreeDotLoading = () => {
  return (
    <div className="loading-dots text-white" id="loading">
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
      <div className="loading-dot"></div>
    </div>
  );
};

const lazyLoader = (importComponent) => {
  return class extends Component {
    state = {
      component: null,
    };
    componentDidMount() {
      importComponent().then((cmp) => {
        this.setState({ component: cmp.default });
      });
    }
    render() {
      const CustComponent = this.state.component;
      return CustComponent ? (
        <CustComponent {...this.props} />
      ) : (
        <ThreeDotLoading />
      );
    }
  };
};
export default lazyLoader;
