import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  const [questions, setQuestions] = useState();
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=4&category=9&type=multiple")
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }, []);
  return (
    <div className="my-5 pt-5">
      <h2 className="fw-bold text-center my-3 text-danger">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <Accordion className="w-75 mx-auto">
        {questions?.map((q, i) => (
          // <p>{q.question}</p>
          <Accordion.Item eventKey={i} key={i}>
            <Accordion.Header className="fw-bold">
              {q.question}
            </Accordion.Header>
            <Accordion.Body>{q.correct_answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
