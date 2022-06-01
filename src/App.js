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
import Products from './Pages/Products/Products';
import NewProduct from './Pages/Products/NewProduct';
import Vendors from './Pages/Vendors/Vendors';
import VendorsInfo from './Pages/Vendors/VendorsInfo';
import VendorsProduct from './Pages/Vendors/VendorsProduct';
import OwnersProduct from './Pages/Products/OwnersProduct';
import ProductVariants from './Pages/Vendors/ProductVariants';
import AllProductVariants from './Pages/Products/AllProductVariants';
import SingleProductInfo from './Pages/Products/SingleProductInfo';
import Reporting from './Pages/Reporting/Reporting';
import RemoveSelectVendor from './Pages/Vendors/RemoveSelectVendor';

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
          <Route path='signin' element={<Signin></Signin>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
        </Route>
        <Route path='/allproduct' element={<Products></Products>}>
          <Route path='newproduct' element={<NewProduct></NewProduct>}></Route>
        </Route>
        <Route path='ownproduct' element={<OwnersProduct></OwnersProduct>}></Route>
        <Route path='allproductvariant' element={<AllProductVariants></AllProductVariants>}></Route>
        <Route path='/productinfo/:id' element={<SingleProductInfo></SingleProductInfo>}></Route>
        <Route path='vendors' element={<Vendors></Vendors>}>
          <Route index element={<VendorsInfo></VendorsInfo>}></Route>
          <Route path='vendorsproduct' element={<VendorsProduct></VendorsProduct>}></Route>
          <Route path='vendorprovariant' element={<ProductVariants></ProductVariants>}></Route>
          <Route path='removevendor' element={<RemoveSelectVendor></RemoveSelectVendor>}></Route>
        </Route>
        <Route path='/report' element={<Reporting></Reporting>}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
