
import { useState } from 'react';
import './App.css';
import Field from './components/Field';
import Languages from './components/Languages';
import Translate from './components/translate';

function App() {
  const [text, setText] = useState("es")
  const [language, setLanguage] = useState("")
  return (
    <div >
   
    <Field onChange={setText}/>
    <Languages language={language} onLanguageChange={setLanguage}/>
    <hr />
    <Translate text={text} language={language}/>
    </div>
  );
}

export default App;
