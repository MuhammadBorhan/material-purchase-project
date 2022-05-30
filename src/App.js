import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddVendor from './Pages/Home/AddVendor';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PurchasePage from './Pages/Home/PurchasePage';
import Invoice from './Pages/Home/Invoice';
import InvoiceProduct from './Pages/Home/InvoiceProduct';
import InvoiceAddProduct from './Pages/Home/InvoiceAddProduct';
import Signin from './Pages/LogingPage/Signin';
import Register from './Pages/LogingPage/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addvendor' element={<AddVendor></AddVendor>}></Route>
        <Route path='/purchasepage' element={<PurchasePage></PurchasePage>}></Route>
        <Route path='/invoice/:id' element={<Invoice></Invoice>}>
          <Route index element={<InvoiceProduct></InvoiceProduct>}></Route>
          <Route path='invoiceaddproduct' element={<PrivateRoute><InvoiceAddProduct></InvoiceAddProduct></PrivateRoute>}></Route>
        </Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
