
import { CORE_CONCEPTS } from './data';
import Header from './components/header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>LALA</TabButton>
            <TabButton>PO</TabButton>
            <TabButton>TINKIWINKE</TabButton>
            <TabButton>ROTO</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
