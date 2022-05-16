import './App.css';
import Navbar from './Components/Navbar';
import TextChange from './Components/TextChange';
import Alert from './Components/Alert';
import About from './Components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import NoteContext from './context/noteContext';
import NoteState from './context/NoteState';
function App() {
  const [alert,setAlert] = useState(null);
  document.title="Text Utility";
  const showAlert=(message,type)=>{
           setAlert({
             msg:message,
             type:type
           });
           setTimeout(()=>{
               setAlert(null);
           },2000);
  }
  const [colors,setColors] = useState('light');
  const settingTheme = (theme)=>{
     if(theme==='light'){
         setColors('light');
         document.body.style.backgroundColor = 'white';
         showAlert("Light Mode has been Enabled","success");
     }else if(theme==='red'){
       setColors('red');
       document.body.style.backgroundColor = '#dc2e5b';
       showAlert("Red Mode has been Enabled","success");
     }else if(theme==='blue'){
       setColors('blue');
       document.body.style.backgroundColor='#462abc';
       showAlert("Blue Mode has been Enabled","success");
     }else{
          setColors('green');
          document.body.style.backgroundColor='#66c29e';
          showAlert("Green Mode has been Enabled","success");
     }
  }
  return (
    <>
    <NoteState>
    <Router>
        <Navbar title="TextUtils" aboutText = "About Us" colors={colors} setTheme={settingTheme} />
        <Alert alert={alert}/>
        <div className="container">
      <Routes>
        
          <Route exact path="/about" element={<About />}>

          </Route>
          <Route exact path="/" element={<TextChange heading="Enter text below to analyze" colors={colors} showAlert={showAlert} />}> 
           </Route>
        </Routes>
        </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
