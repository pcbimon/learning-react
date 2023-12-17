import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
function App() {
  return (
    // <> is a fragment
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples/>
      </main>
    </>
  );
}

export default App;
