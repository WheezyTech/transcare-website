import React, { useState } from "react";
import "../index.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");

  const faqs = [
    {
      question: "What is Transcare Agencies?",
      answer:
        "Transcare Agencies is a Kenyan-based company specializing in the design and production of efficient, clean-burning cookstoves that reduce cooking time, fuel costs, and environmental impact."
    },
    {
      question: "What does clean cooking mean?",
      answer:
        "Clean cooking refers to the use of efficient cooking technologies that reduce smoke, harmful emissions, and excessive fuel consumption compared to traditional cooking methods."
    },
    {
      question: "How do Transcare cookstoves benefit households?",
      answer:
        "Our cookstoves reduce cooking time, lower fuel costs, produce less smoke, improve indoor air quality, and protect the environment."
    },
    {
      question: "Who can use Transcare cookstoves?",
      answer:
        "Our cookstoves are suitable for households, small businesses, institutions, and community organizations looking for efficient cooking solutions."
    },
    {
      question: "Where is Transcare Agencies located?",
      answer:
        "Transcare Agencies is based in Eldoret, Kenya where we design and distribute clean cookstove technologies."
    },
    {
      question: "How do clean cookstoves help the environment?",
      answer:
        "They reduce firewood and charcoal use, helping reduce deforestation, carbon emissions, and environmental degradation."
    },
    {
      question: "Are your cookstoves affordable?",
      answer:
        "Yes. Our cookstoves are designed to be cost-effective and fuel-efficient, helping users save money over time."
    },
    {
      question: "Do you work with NGOs or organizations?",
      answer:
        "Yes. We partner with NGOs, institutions, and development programs to distribute clean cooking solutions in communities."
    },
    {
      question: "How can I purchase your cookstoves?",
      answer:
        "You can contact us through our website, phone, or email to learn about purchasing or partnership opportunities."
    }
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions FAQ's</h1>

      {/* SEARCH BOX */}
      <input
        type="text"
        placeholder="Search a question..."
        className="faq-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredFaqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </div>

          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;