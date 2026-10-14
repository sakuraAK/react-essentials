import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Button from "./components/Button";
import { useState } from "react";

function App() {

  const [exampleHtml, updateExampleHtml]  = useState((<p>Click on a button</p>));

  //let exampleHtml = (<p>Click on a button</p>);
  function clickHandler(conceptName) {
      console.log(conceptName + ' button clicked!');
      updateExampleHtml((
        <div id="tab-content">
          <h3>{EXAMPLES[conceptName].title}</h3>
          <p>{EXAMPLES[conceptName].description}</p>
          <pre>
            <code>{EXAMPLES[conceptName].code}</code>
          </pre>
        </div>
    ))
  }

  return (<div>  
    {/* usage */}
    <main>
    <Header></Header>
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => <CoreConcept {...concept} key={index}></CoreConcept>)}
      </ul>
    </section>
    <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((conceptName) =>  
            <Button key={conceptName} clickHandler={() => clickHandler(conceptName)}>{conceptName}</Button>)}
          </menu>
          {exampleHtml}
        </section>
    </main>
    

  </div>);
}

export default App;