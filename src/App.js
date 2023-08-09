import './App.css';
import Products from './components/Products';
import ViewCart from './components/ViewCart';
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/viewCart" element={<ViewCart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
