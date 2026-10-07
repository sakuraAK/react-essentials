import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import CORE_CONCEPTS from "./data";

function App() {
  console.log("Executing App");
  return (<div>  
    {/* usage */}
    <main>
    <Header></Header>
    <section id="core-concepts">
      <ul>
        {/* <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          desc={CORE_CONCEPTS[0].desc} 
          img={CORE_CONCEPTS[0].img}>
        </CoreConcept>
        <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
        <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
        <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept> */}

        {CORE_CONCEPTS.map((concept, index) => <CoreConcept {...concept} key={index}></CoreConcept>)}

      </ul>
    </section>
    </main>
    

  </div>);
}

export default App;