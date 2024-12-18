import React from "react";
import FAQList from "../components/FAQList";

const FAQPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <FAQList />
    </div>
  );
};

export default FAQPage;
