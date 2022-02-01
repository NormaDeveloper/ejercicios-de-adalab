import '../styles/App.css';

function App() {
  const handleBtn = (ev) => {
    console.log('Tecla pulsada', ev.currentTarget.value);
  };
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="push" onKeyUp={handleBtn}></input>
      </form>
    </div>
  );
}

export default App;
