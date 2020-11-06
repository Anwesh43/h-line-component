import logo from './logo.svg';
import './App.css';
import {
    useAnimatedScale, 
    useDimension
} from './hooks'

function App() {
  const {w, h} = useDimension()
  const {scale, start} = useAnimatedScale(0.02, 20)
  return (
    <div className="App">
      <button onClick = {start}>start</button>
      <p>{scale}</p>
    </div>
  );
}

export default App;
