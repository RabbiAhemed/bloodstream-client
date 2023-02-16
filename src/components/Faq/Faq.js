import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  const [questions, setQuestions] = useState();
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=4&category=9&difficulty=medium")
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }, []);
  return (
    <div className="my-5 pt-5">
      <h2 className="fw-bold text-center my-3 text-danger">
        Most asked questions
      </h2>

      <Accordion className="w-75 mx-auto">
        {questions?.map((q, i) => (
          // <p>{q.question}</p>
          <Accordion.Item eventKey={i}>
            <Accordion.Header>{q.question}</Accordion.Header>
            <Accordion.Body>{q.correct_answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
