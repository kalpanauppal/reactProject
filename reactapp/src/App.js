import logo from './logo.svg';
import { useEffect ,useState} from 'react';
import './App.css';

const [first,sec] =["kalpana","uppal"]
console.log(first);
console.log(sec);
function App({name}) {
  const [emotion,setEmotion]=useState("happy")
  useEffect(()=>{
    console.log( {emotion});
  },[emotion]);
  return (
    <div className="App">
      

      <h1> Hello from {name}</h1>
      <h1> current mood is {emotion}</h1>
      <button onClick={()=>setEmotion("sad")}>sad</button>
      <button onClick={()=>setEmotion("happy")}>happy</button>
    </div>
  );
}

export default App;
