


function Header() {
  return (<header>
    <img src='src/assets/react-core-concepts.png' alt="Atom"></img>
    <h1>
      React Essentials
    </h1>
    <p> 
      Fundamental React concepts you will need for almost any app you are
        going to build!
    </p>
  </header>);
}

function CoreConcept(props) {
 
  return (<li>
                <h3>{props.component}</h3>
                <p>{props.desc}</p>
                <img src={props.src} alt='Component'></img>
          </li>);
}


function App() {

  return (<div>
          <Header/>
          <main>
            <h2>Core concepts</h2>
            <section id='core-concepts'>
            <ul>
              <CoreConcept component='Components' desc='Reusable UI blocks..' src='src/assets/components.png'/>
              <CoreConcept component='JSX' desc='HTML style code in js files..' src='src/assets/jsx-ui.png'/>
              <CoreConcept component='Props' desc='Component parameters..' src='src/assets/config.png'/>
              <CoreConcept component='State' desc='...' src='src/assets/components.png'/>
            </ul>
            </section>
            
          </main>
        </div>);
}


export default App;