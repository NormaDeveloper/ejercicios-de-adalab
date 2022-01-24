import '../styles/Tooltip.scss';

const Tooltip = (props) => {
  console.log(props.children);

  return (
    <section className="modal-window">
      <p className="sign">?</p>
      <div className="children-text">{props.children}</div>
    </section>
  );
};

export default Tooltip;
