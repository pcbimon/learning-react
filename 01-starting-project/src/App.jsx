import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
function App() {
  //state
  const [ selectedTopic,setSekectedTopic ] = useState('Please click a button');
  function handleSelect(selectedButton) {
    setSekectedTopic(selectedButton);
    //console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
        </section>
        {selectedTopic}
      </main>
    </div>
  );
}

export default App;
