import { useState, cloneElement } from 'react';
import './Tooltip.css';

export const Tooltip = ({ children, content }) => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div className="tooltip-wrapper">
      {cloneElement(children, {
        onMouseEnter: show,
        onMouseLeave: hide,
        onFocus: show,
        onBlur: hide,
      })}
      {visible && (
        <span className="tooltip-content" role="tooltip">
          {content}
        </span>
      )}
    </div>
  );
};
