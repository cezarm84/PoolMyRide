import React from "react";

interface FAQItem {
  question: string;
  answer: string;
  imageUrl: string;
  imageAlt: string;
}

interface FAQListProps {
  faqs: FAQItem[];
}

const FAQList: React.FC<FAQListProps> = ({ faqs }) => {
  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
          <p>{faq.answer}</p>
          <img
            src={faq.imageUrl}
            alt={faq.imageAlt}
            className="rounded-lg shadow-md mt-2"
            width="600"
            height="400"
          />
        </div>
      ))}
    </div>
  );
};

export default FAQList;

