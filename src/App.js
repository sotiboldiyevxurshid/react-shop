
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';

import CreateData from "./companents/CreateData/CreateData";
import EditPage from "./EditPage/EditPage";
import TableList from "./TableList/TableList";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
  
   <Header />
   <Routes>

     <Route path='/' element={<Cards />} />
   <Route path="/create" element={<CreateData/>} />
      <Route path="/table" element={<TableList/>} />
      <Route path="/table/edit/:id" element={<EditPage/>} />

     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
  </>
  );
}

export default App;
