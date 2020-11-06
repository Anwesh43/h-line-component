import logo from './logo.svg';
import './App.css';
import {
    useAnimatedScale, 
    useDimension
} from './hooks'
import HLineComponent from './HLineComponent'

function App() {
  const {w, h} = useDimension()
  const {scale, start} = useAnimatedScale(0.02, 20)
  return (
    <div className="App">
      <button onClick = {start}>start</button>
      <HLineComponent w = {w} h = {h} scale = {scale}></HLineComponent> 
    </div>
  );
}

export default App;
