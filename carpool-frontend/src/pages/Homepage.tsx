// pages/Homepage.tsx

import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const newsItems = [
  {
    image: "https://storage.googleapis.com/a1aa/image/zMRpfDWr9UQnVC8nNnFfcm4XZhifbdhHo6J3MfSTPrnodYvPB.jpg",
    alt: "New app feature",
    title: "New App Feature Released",
    description: "We have released a new feature to make carpooling even easier.",
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/vpyRFLNDe4xlOSq1UMWP4erSZ3zcPbZwL3YfwD6RtYFecYvPB.jpg",
    alt: "Community Event",
    title: "Community Event",
    description: "Join us for our upcoming community event to meet fellow carpoolers.",
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/rBlcdsjI34qiHtluYeCKd55ceHPUI5feZSbw0breNiI66weeJA.jpg",
    alt: "Success story",
    title: "Success Story",
    description: "Read how carpooling has positively impacted our users.",
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/vM9Stwt7g2psCNcHm8mcffbV2teoKr9Bj775hiRcbdf95lxPB.jpg",
    alt: "FAQList",
    title: "FAQList",
    description: "You can find all you need here or you can contact our support team through the platform.",
  },
];

const Homepage = () => {
  const [username, setUsername] = useState("");

  const handleLogin = (email: string) => {
    setUsername(email);
  };
  

  return (
    <div className="flex flex-col min-h-screen font-roboto bg-gray-100">
      {/* Header Component */}
      <Header username={username} />
  
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Login Section */}
        {!username && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
            <LoginForm onLogin={handleLogin} />
          </section>
        )}
  
        {/* Main Sections */}
  
        {/* Welcome Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Smart Carpool</h1>
          <p className="text-gray-600 mb-8">
            Share your ride, save the planet, and make new friends along the way.
          </p>
          <img
            src="https://storage.googleapis.com/a1aa/image/WSnPGlrjHEYeQKboABgHS2jUMn4FDqI7JXWp7Br17zasD79JA.jpg"
            alt="Carpool group"
            className="mx-auto rounded-lg shadow-lg"
            width="800"
            height="400"
          />
        </section>
  
        {/* Latest News Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg overflow-hidden">
                {item.title === "FAQList" ? (
                  <Link to="/faq"> {/* Wrap FAQ card with Link */}
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mt-4">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </Link>
                ) : (
                  <>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mt-4">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
  
        {/* Logged-in Info */}
        {username && (
          <p className="text-center mt-6 text-xl">
            You are logged in as <span className="font-bold">{username}</span>
          </p>
        )}
      </main>
  
      {/* Footer Component */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default Homepage;
