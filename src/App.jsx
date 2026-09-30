

function Header() {
  return  (
    <header>
      <img src='src/assets/react-core-concepts.png' alt="Atom"></img>
      <h1>
        React Essentials
      </h1>
      <p>
        Fundamental React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}


function App() {

  return (<div>  
    {/* usage */}
    <Header></Header>
  </div>);
}


export default App;