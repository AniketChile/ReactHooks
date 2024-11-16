
import './App.css';
import  {useState} from  'react'
function App() {
  let [counter,setCounter] = useState(0)

  const addValue = ()=>{
    if(counter>=25){
      removeValue()
    }
    counter += 1;
    setCounter(counter);
  }

  const removeValue = ()=>{
    if(counter<=0){
      addValue()
    }
    counter -=1;
    setCounter(counter);
    
  }
  

  return (
    <>
        <h1 style={{textAlign:'center',fontFamily: 'Arial'}}>Counter APP ('using useState() hook')</h1>
        <h2 style={{textAlign:'center',fontFamily: 'Arial'}}>Counter Value: {counter}</h2>

        <div style={{textAlign:'center',fontFamily: 'Arial'}}>
        <button style={{}}
        onClick={addValue} >
          Add Value
        </button>

        <br/>
        <br/>
        <button 
        onClick={removeValue}
        >Remove Value</button>
        </div>

        <p style={{textAlign:'center',fontSize:'20px',fontWeight:'bolder',fontStyle:'italic'}}>*negative and beyond 25 value will not be displayed*</p>
    </>
  );
}

export default App;
