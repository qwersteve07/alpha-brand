const ExternalLink = ({ link, children, className }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className={className}
      >
        {children}
      </a>
    );
  };
  
  export default ExternalLink;
  