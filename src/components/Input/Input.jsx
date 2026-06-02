import './Input.css';

export const Input = ({ placeholder, defaultValue, value, onChange, error, disabled, leftIcon, rightIcon, ...rest }) => {
  const inputClasses = [
    'input',
    error ? 'input-error' : '',
    disabled ? 'input-disabled' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className="input-wrapper">
      {leftIcon && <span className="input-icon input-icon-left">{leftIcon}</span>}
      <input
        className={inputClasses}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={disabled ? undefined : onChange}
        disabled={disabled}
        {...rest}
      />
      {rightIcon && <span className="input-icon input-icon-right">{rightIcon}</span>}
      {error && <span className="input-error-message" role="alert">{error}</span>}
    </div>
  );
};
