function Repo(props) {
  const handleClick = (ev) => {
    props.deleteRepo(ev.currentTarget.id);
  };

  return (
    <article>
      <h2>{props.oneRepo.fullname}</h2>
      <img src={props.oneRepo.image} alt="" />
      <p>{props.oneRepo.description}</p>
      <button onClick={handleClick} id={props.oneRepo.id}>
        X
      </button>
    </article>
  );
}
export default Repo;
