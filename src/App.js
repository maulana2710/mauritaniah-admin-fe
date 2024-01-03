import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PaymentReceipt from "./components/PaymentReceipt";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/PaymentReceipt" element={<PaymentReceipt />} />
      </Routes>
    </BrowserRouter>
  );
}

export function Index() {
  return(
  <>
    <header className="font-serif">
      <Sidebar />
    </header>
  </>
  )
}
