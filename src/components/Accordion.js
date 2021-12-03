import React from 'react';

const Accordion = ({id,question,answer,show,onClick}) => {
  return (
    <section className="list p-1">
      <h5 onClick={onClick}>{id}. {question}</h5>
      {show ? <h5 className="lgr p-4 text-dark">{answer}</h5> :null}
    </section>
  );
}

export default Accordion;
