import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import ChatpotPage from "./pages/ChatpotPage";
import FAQPage from "./pages/FAQPage";
import Homepage from "./pages/Homepage";
//import BookTripPage from "./pages/BookTripPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chatpot" element={<ChatpotPage />} />
            <Route path="/faq" element={<FAQPage />} />
            {/* <Route path="/book-trip" element={<BookTripPage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
