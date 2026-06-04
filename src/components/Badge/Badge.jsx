import './Badge.css';

export const Badge = ({ children, status, isPill, ...rest }) => {
  const classes = [
    'badge',
    status ? `badge-${status}` : '',
    isPill ? 'badge-pill' : '',
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
};
