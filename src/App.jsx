import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Use BrowserRouter
// import './App.css';
import ProductListPage from './Component/ProductListPage';
import ProductDetailPage from './Component/ProductDetailPage';
import CheckoutPage from './Component/CheckoutPage';
import PaymentPage, {PaymentSuccessPage, PaymentFailurePage} from './Component/PaymentPage';
import Headers from './Component/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Router>  {/* Corrected to BrowserRouter */}
        <Headers />  {/* Moved the Headers outside of Routes */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductListPage />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path="/payment/success" element={<PaymentSuccessPage />} />
        <Route path="/payment/failure" element={<PaymentFailurePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;



/// Run Mock Api = ///json-server --watch db.json --port 5000,