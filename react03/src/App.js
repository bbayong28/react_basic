import { useState } from 'react'; 
import './App.css';


function App() {
  const [num, setNum] = useState(0);
  const [hc, sethc] = useState(false);
  return (
    <div>
      <i className='xi-heart'
        onClick={() => (setNum(num + 1), sethc(!hc))} style={{ color: hc && 'red' }}></i> {num}
    </div>
  );
}

export default App;
