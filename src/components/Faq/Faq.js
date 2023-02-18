import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://mocki.io/v1/7a19255d-8f78-45a5-b41b-0ffcdfb0ad60")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div className="my-5 pt-5">
      <h2 className="fw-bold text-center my-3 text-danger">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <Accordion className="w-75 mx-auto">
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
