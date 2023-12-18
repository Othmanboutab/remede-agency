const Feature = ({ logo, title, description }: Feature) => {
  return (
    <div className="feature-item">
      <img src={logo} alt="Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
