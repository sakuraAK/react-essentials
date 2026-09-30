import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import componentImg from './assets/components.png'
import jsxImg from './assets/jsx-ui.png'
import propsImg from './assets/config.png'
import stateImg from './assets/state-mgmt.png'

function App() {
  console.log("Executing App");
  return (<div>  
    {/* usage */}
    <main>
    <Header></Header>
    <section id="core-concepts">
      <ul>
        <CoreConcept 
          title="Components" 
          desc="UI building blocks..." 
          img={componentImg}>
        </CoreConcept>
        <CoreConcept title="JSX" desc="HTM style code..." img={jsxImg}></CoreConcept>
        <CoreConcept title="Props" desc="Helps to make components configurable..." img={propsImg}></CoreConcept>
        <CoreConcept title="State" desc="..." img={stateImg}></CoreConcept>
      </ul>
    </section>
    </main>
    

  </div>);
}

export default App;