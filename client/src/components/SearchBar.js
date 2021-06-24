import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

const renderInput = ({
  input,
  label,
  value,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <input
        {...input}
        className="w-96 h-10  rounded border border-purple focus:outline-none focus:ring-1 focus:ring-purple-600  "
        placeholder={label}
        type={type}
        value={value}
        autoComplete="off"
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};
let SearchBar = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onVideoSubmit)}>
      <Field
        name="search"
        component={renderInput}
        type="text"
        label="Search..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

SearchBar = reduxForm({
  form: "videoTerm",
})(SearchBar);

const selector = formValueSelector("videoTerm");
SearchBar = connect((state) => {
  const values = selector(state, "search");
  return {
    values,
  };
})(SearchBar);

export default SearchBar;
