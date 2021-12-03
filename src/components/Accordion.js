import React from 'react';

const Accordion = ({id,question,answer,show,onClick}) => {
  return (
    <section className="list p-1">
      <h4 onClick={onClick}>{id}. {question}</h4>
      {show ? <h5 className="bg-white p-4 text-dark">{answer}</h5> :null}
    </section>
  );
}

export default Accordion;
