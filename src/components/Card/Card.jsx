import './Card.css';

const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

const CardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
}

const CardFooter = ({ children }) => {
  return <div className="card-footer">{children}</div>;
}

export const Card = ({ children, ...rest }) => {
  return <div className="card" {...rest}>{children}</div>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;