const Header = (props) => {
  return (
    <header>
      <img src={props.headerInfo.image} alt="Medal badge with a star" />
      <h1>{props.headerInfo.title}</h1>
      <p>{props.headerInfo.description}</p>
    </header>
  );
};

export default Header;
