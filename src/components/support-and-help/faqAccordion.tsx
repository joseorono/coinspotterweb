import React from 'react';

const FaqAccordion = (props: FaqQuestionsProps) => {
  return (
    <>
      <div className="accordion">
        {props.questions.map((entry, index: number) => (
          <div
            className="collapse-plus collapse mb-4 bg-base-200"
            key={"faq_item_" + index}
          >
            <input
              type="radio"
              name="faq_accordion_radio"
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-xl font-medium">
              {entry.question}
            </div>
            <div className="collapse-content">
              <p>{entry.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqAccordion;

