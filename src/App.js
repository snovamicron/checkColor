import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

//actions
import { setColorValue } from './Action/index'

function App() {
  const BackgroundColorChange = useSelector(state => state.BackgroundColorChange)
  const dispatch =  useDispatch()
  const onTextChange = (e)=>{
    dispatch(setColorValue(e.target.value))
  }
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: BackgroundColorChange}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Created By Soumyadeep Mondal
        </p>
        <h5 style={{margin:'7px 5px'}}>
          Test Your Color
        </h5>
        <input type='text' onChange={onTextChange} placeholder='Enter Background color' className='colorInput'/>
      </header>
    </div>
  );
}

export default App;
