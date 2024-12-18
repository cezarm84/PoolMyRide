import React from "react";

const FAQList: React.FC = () => {
  const faqs = [
    { question: "How do I book a trip?", answer: "Go to the Book Trip page and fill in your details." },
    { question: "How does carpooling work?", answer: "We match you with other users heading to the same destination." },
    { question: "Is carpooling safe?", answer: "Yes, we verify user identities and provide safety features." },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {faqs.map((faq, idx) => (
        <div key={idx} className="mb-4">
          <h2 className="font-bold">{faq.question}</h2>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQList;
