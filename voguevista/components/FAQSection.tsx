"use client";
import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is VogueVista’s return policy?",
    answer:
      "You can return any unused item within 30 days of purchase for a full refund or exchange.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, VogueVista ships worldwide. Delivery times and costs depend on your location.",
  },
  {
    question: "How do I know which size to order?",
    answer:
      "Each product page includes a detailed size guide. You can also contact us for personalized sizing help.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely! Once your order ships, we’ll send you a tracking number via email.",
  },
  {
    question: "Do you restock sold-out items?",
    answer:
      "Some of our bestsellers are restocked. You can sign up for restock notifications on the product page.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us via email at support@voguevista.com or through live chat on our website.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2 
      bg-gradient-to-b from-rose-50 via-pink-50 to-beige-50">
      <h1 className="mb-8 text-xl font-bold md:text-3xl text-gray-900 text-center">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="px-5 py-4 mb-4 rounded-xl bg-white shadow-md border border-rose-100"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex items-center justify-between w-full py-2 font-semibold text-left text-gray-800 outline-none hover:text-rose-600 focus:text-rose-600"
              aria-controls={`faq-${index}`}
              aria-expanded={openIndex === index}
            >
              <span className="flex items-center">
                <svg
                  className={`w-4 h-4 mr-2 transition-transform ${
                    openIndex === index ? "rotate-90 text-rose-600" : "text-gray-500"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {faq.question}
              </span>
            </button>

            {openIndex === index && (
              <div
                className="pb-4 ml-6 text-gray-700 leading-relaxed"
                id={`faq-${index}`}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-700 mb-4 text-lg font-medium">
          Still need help? Our VogueVista team is here for you.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-full text-white font-semibold tracking-wide shadow-md 
          bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600
          hover:from-pink-400 hover:via-rose-500 hover:to-pink-700
          transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
