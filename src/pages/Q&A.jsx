import { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { questions, answers } from "../data";
import qr from "../assets/qr_registration.svg";

const QandA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="question-section">
      {questions.map((question, index) => (
        <div key={index}>
          <button
            type="button"
            className="question"
            onClick={() => toggleQuestion(index)}
          >
            <p>{question}</p>
            {openIndex === index ? <FaCircleMinus /> : <FaCirclePlus />}
          </button>
          {openIndex === index && (
            <ul>
              {answers[index].map((item, i) => (
                <li key={i}>
                  {item.type === "text" && <p>{item.content}</p>}
                  {item.type === "image" && (
                    <img
                      className="qr-code"
                      src={qr}
                      alt={`Image ${index}-${i}`}
                    />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default QandA;
