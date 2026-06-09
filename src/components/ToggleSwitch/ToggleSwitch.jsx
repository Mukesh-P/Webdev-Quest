import './ToggleSwitch.css';

export const ToggleSwitch = ({ id, label, defaultChecked, checked, onChange, disabled, ...rest }) => {
  return (
    <div className="toggle-switch" {...rest}>
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="toggle-track">
        <span className="toggle-thumb" />
      </span>
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};
