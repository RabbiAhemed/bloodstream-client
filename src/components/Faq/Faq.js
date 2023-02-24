import React, { useEffect, useState } from "react";
import "./Faq.css";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_FAQ_URL}`)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div className="my-5 pt-5">
      <h2 className="fw-bold text-center my-3 text-danger" id="faq-header">
        MOST FREQUENTLY ASKED QUESTIONS
      </h2>

      <Accordion className="w-75 mx-auto" id="accordion">
        {data?.map((q, i) => (
          // <p>{q.question}</p>
          <Accordion.Item eventKey={i} key={i}>
            <Accordion.Header className="fw-bold">
              {q.question}
            </Accordion.Header>
            <Accordion.Body>{q.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
