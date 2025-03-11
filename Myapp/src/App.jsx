import {BrowserRouter, Routes, Route} from "react-router-dom"
 import Table from "./Components/Table"
 import Form from "./Components/Form"
 
 function App() {
   return (
     <div>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Table/>}/>
               <Route path='/form' element={<Form/>}/>
            </Routes>
         </BrowserRouter>
     </div>
   )
 }

 export default App