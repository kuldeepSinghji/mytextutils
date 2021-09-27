import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Footer from './components/Footer';
// import Alert from './components/Alert';
function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode, setMode] = useState({
    color:"black",
    backgroundColor:"white"
  })
  const onchange = ()=>{
    if(mode.color === "black"){
      setMode({
        color:"white",
        backgroundColor:"palevioletred"
      })
      showAlert("Dark Mode has been anabled","success")
      document.title = "Textutils -Dark Mode"
    }
    else{
      setMode({
        color:"black",
        backgroundColor:"white"
      })
      document.title = "Textutils -Light Mode"
      showAlert("Light Mode has been anabled","success")
    }
  }
  return (
    <>
    <div style={mode}>
    <Navbar onchange={onchange} title="MyTextutils" mode={mode}/>
    <Textform showAlert={showAlert} mode={mode} alert={alert} heading="Enter the Text to analyze.."/>
    <Footer mode={mode}/>
    </div>
    </>
  );
}

export default App;
