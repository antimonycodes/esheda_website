import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import WaitlistPage from "./pages/WaitlistPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Routes>
        <Route path="/" element={<WaitlistPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
};

export default App;
