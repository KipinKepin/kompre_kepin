import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerList from "./pages/CustomerList";
import CustomerDetail from "./pages/CustomerDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/detail" element={<CustomerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
