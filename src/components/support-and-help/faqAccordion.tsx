import React from 'react';

const FaqAccordion = (props: FaqQuestionsProps) => {
  return (
    <div className="accordion">
      {props.questions.map((entry, index: number) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button">
              {entry.question}
            </button>
          </h2>
          <div className="accordion-content">
            <p>{entry.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
