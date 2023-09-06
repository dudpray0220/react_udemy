const Concept = (props) => {
  return (
    <div className={props.className}>
      <img src={props.concepts.image} alt={props.concepts.title} />
      <h2>{props.concepts.title}</h2>
      <p>{props.concepts.description}</p>
    </div>
  );
};

export default Concept;
