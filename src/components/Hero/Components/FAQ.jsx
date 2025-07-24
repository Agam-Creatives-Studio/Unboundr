import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is Unboundr?',
    answer:
      'Unboundr is a fun and practical training platform. We teach important life and work skills through games, real-world activities, and team challenges.',
  },
  {
    question: 'What kind of programs does Unboundr offer?',
    answer:
      'We run programs that help students get job-ready, help startup founders become better leaders, and help corporates teams work better together — all through playful, hands-on learning.',
  },
  {
    question: 'Who are these programs for?',
    answer:
      'Our programs are perfect for students, startup founders, and company teams who want to learn soft skills like communication, teamwork, and leadership.',
  },
  {
    question: 'Where is Unboundr based?',
    answer:
      'Unboundr is based in India. We offer training both online and in person in cities like Chennai, Bangalore, and Pondicherry, as well as across the rest of India',
  },
  {
    question: 'What makes Unboundr different?',
    answer:
      'We don’t just teach — we let you learn by doing. Our sessions are more like games and challenges than boring lectures, so they’re fun and easy to remember.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.faqContainer}>
      <motion.h2
        className="main-title2 text-center py-4 py-md-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        Frequently Asked Questions
      </motion.h2>

      {faqs.map((faq, index) => (
        <div key={index} style={styles.faqItem}>
          <div style={styles.questionRow} onClick={() => toggleFAQ(index)}>
            <span style={styles.question}>{faq.question}</span>
            <span style={styles.symbol}>
              {openIndex === index ? '–' : '+'}
            </span>
          </div>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={styles.answer}>{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

const styles = {
  faqContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem',
    fontFamily: 'Poppins, sans-serif',
  },
  faqItem: {
    borderBottom: '1px solid #ddd',
    padding: '1rem 0',
    cursor: 'pointer',
  },
  questionRow: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#000',
  },
  symbol: {
    fontSize: '1.5rem',
    marginLeft: '1rem',
    color: '#000',
    width: '1.5rem',
    textAlign: 'center',
  },
  question: {
    flex: 1,
    color: '#2B2A60',
  },
  answer: {
    marginTop: '0.75rem',
    fontSize: '1rem',
    color: '#555',
    paddingLeft: '2.25rem',
    lineHeight: '1.6',
  },
};
