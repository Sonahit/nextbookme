import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} InputType
 * @property {String} name
 * @property {String} [label]
 * @property {String} type
 * @property {String} placeholder
 * @property {String} [ariaHelp]
 *
 * @typedef {InputType} Input
 *
 * @typedef {Object} FormProps
 * @property {Input[]} inputs
 * @property {React.FormHTMLAttributes} attributes
 */

/**
 *
 * @param {FormProps} props
 */
export default function SignupForm({ inputs, attributes }) {
  return (
    <form {...attributes}>
      {inputs.map(input => {
        return (
          <div className="form-group" key={`${input.name}-${input.type}`}>
            <InputComponent {...input} />
          </div>
        );
      })}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
/**
 *
 * @param {Input} props
 */
const InputComponent = ({
  name,
  type,
  label,
  placeholder,
  ariaHelp,
  ...other
}) => {
  const InputForm =
    type !== "check" ? (
      <input
        type={type}
        className="form-control"
        id={`${name}-input`}
        name={name}
        aria-describedby={`${name}Help"`}
        placeholder={placeholder}
        {...other}
      />
    ) : (
      <input
        type={type}
        className="form-control"
        id={`${name}-input`}
        name={name}
        aria-describedby={`${name}Help"`}
        placeholder={placeholder}
      />
    );
  return (
    <>
      {label && type !== "check" && (
        <label htmlFor={`${name}-input`}>{label}</label>
      )}
      {InputForm}
      {label && type === "check" && (
        <label className="form-check-label" htmlFor={`${name}-input`}>
          {label}
        </label>
      )}
      {ariaHelp && (
        <small id={`${type}Help`} className="form-text text-muted">
          {ariaHelp}
        </small>
      )}
    </>
  );
};

SignupForm.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string,
      placeholder: PropTypes.string
    }).isRequired
  ).isRequired
};
