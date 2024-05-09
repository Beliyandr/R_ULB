import React from "react";
import classese from "./MyInput.module.css";

export const MyInput = (props) => {
  return <input className={classese.MyInput} {...props} />;
};
