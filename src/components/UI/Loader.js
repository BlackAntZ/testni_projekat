import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loader_container}>
      <ClipLoader
        color={'#289944'}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;