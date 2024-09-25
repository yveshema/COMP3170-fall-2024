import "./App.css";

function random(n) {
  return Math.floor(Math.random() * n);
}

function App() {

  function handleInnerClick(e) {
    const element = e.target;
    const red = random(255);
    const green = random(255);
    const blue = random(255);

    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }

  function handleOuterClick(e) {
    const element = e.currentTarget;
    const color = random(255);

    setTimeout(() => {
      element.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    }, 500);
  }

  return (
      <div className="outer" onClick={handleOuterClick}>
        <div className="inner" onClick={handleInnerClick}></div>
      </div>
  );
}

export default App;
