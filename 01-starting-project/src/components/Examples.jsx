import TabButton from './TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
    //state
    const [selectedTopic, setSekectedTopic] = useState();
    function handleSelect(selectedButton) {
    setSekectedTopic(selectedButton);
    }
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
    tabContent = (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
        </div>
    );
    }
    const buttons = (
      <>
        <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >Components</TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >JSX</TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >Props</TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >State</TabButton>
      </>
    );
    return (
        <Section title='Examples' id="examples">
          <Tabs 
            buttons={buttons}
            >
            {tabContent}
          </Tabs>
          
        </Section>
    );
}