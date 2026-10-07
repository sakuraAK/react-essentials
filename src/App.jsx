import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {

  let tabDefaultContet = <p>Please make selction</p>; 

  const [tabContent, setTabContent] = useState(tabDefaultContet);

  function clickHandler(conceptName) {
    console.log(`${conceptName} button pressed`);

    if (conceptName) {
      setTabContent(
        <div id="tab-content">
          <h3>{EXAMPLES[conceptName].title}</h3>
          <p>{EXAMPLES[conceptName].description}</p>
          <pre>
            <code>{EXAMPLES[conceptName].code}</code>
          </pre>
        </div>
      );
    }

  

    //setTabContent(tabContetJsx);
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
          <TabButton onClickEventHandler={() => clickHandler("components")}>Component</TabButton>
          <TabButton onClickEventHandler={() => clickHandler("jsx")}>JSX</TabButton>
          <TabButton onClickEventHandler={() => clickHandler("props")}>Props</TabButton>
          <TabButton onClickEventHandler={() => clickHandler("state")}>State</TabButton>
        </menu>
        {tabContent}
      </section>
    </main>


  </div>);
}

export default App;