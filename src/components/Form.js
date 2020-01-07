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
export default function Form({ inputs, attributes }) {
  return (
    <form {...attributes}>
      {inputs.map(input => {
        if (input.type === "checkbox") {
          return (
            <div
              className="form-group form-check"
              key={`${input.name}-${input.type}`}
            >
              <InputComponent {...input} />
            </div>
          );
        }
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
    type !== "checkbox" ? (
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
        className="form-check-input"
        id={`${name}-input`}
        name={name}
        aria-describedby={`${name}Help"`}
        placeholder={placeholder}
      />
    );
  return (
    <>
      {label && type !== "checkbox" && (
        <label htmlFor={`${name}-input`}>{label}</label>
      )}
      {InputForm}
      {label && type === "checkbox" && (
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

Form.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string,
      placeholder: PropTypes.string
    }).isRequired
  ).isRequired
};
