import { useState } from "react"
import './App.css';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';

function App() {
  const [text, setText] = useState('')
  return (
    <div className="App">
      <ComponentA setText={setText} />
      <ComponentB text={text} />
    </div>
  );
}

export default App;
