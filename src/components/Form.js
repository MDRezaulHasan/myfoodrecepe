import React from "react";

const Form = (props) => (
    <form className="form-inline my-2 my-lg-0" onSubmit={props.getRecipe}>
    <input className="form-control mr-sm-2"
      type="search"
      placeholder="Search"
      aria-label="Search" name="recipeName" />
    <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
  </form>
);
export default Form;

  