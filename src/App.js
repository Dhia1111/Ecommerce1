import  './App.css';

import {BrowserRouter,Routes,Route}from "react-router-dom"
import PopulerNow from './PopulerNow/PopulerNow';
import LayOut from './LayOut/LayOut';
import Men from './Men/Men';
import CardDetales from './CardDetales/CardDetales';
function App() {

  return (
    <div className="App">
     
 <BrowserRouter>

  <Routes>

<Route path='/' element={<LayOut/>}>
<Route path ="about" element={<p>this is the about html </p>}/>
<Route path ="women" element={<p>this is the women html </p>}/>
<Route path ="men" element={<Men/>}/>
<Route path ="kids" element={<p>this is the kids html </p>}/>
<Route path='/' element={<PopulerNow/>}/>
<Route path=':id' element={<CardDetales/>}/>



</Route>

    </Routes>
    
    </BrowserRouter>

    
      
    
    </div>
  );
}

export default App;
