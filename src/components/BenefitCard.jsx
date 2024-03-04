import React from "react";
import "../css/components/benefitcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BenefitCard = ({ number, title, description }) => {
  return (
    <>
      <div className="benefit-card">
        <div benefit-num>
          <div className="benefit-number">{number}</div>
        </div>
        <div className="benefit-text">
          <h3 className="benefit-title">{title}</h3>
          <p className="benefit-description">{description}</p>
        </div>
        <button className="arrow-button">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  );
};

const benefitsData = [
  {
    number: "01",
    title: "Flexible Learning Schedule",
    description:
      "Fit your coursework around your existing commitments and obligations.",
  },
  {
    number: "02",
    title: "Expert Instruction",
    description:
      "Learn from industry experts who have hands-on experience in design and development..",
  },
  {
    number: "03",
    title: "Diverse Course Offerings",
    description:
      "Explore a wide range of design and development courses covering various topics.",
  },
  {
    number: "04",
    title: "Updated Curriculum",
    description:
      "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    number: "05",
    title: "Practical Projects and Assignments",
    description:
      "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    number: "06",
    title: "Interactive Learning Environment",
    description:
      "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
];

const Benefits = () => {
  return (
    <>
      <div className="benefits">
        {benefitsData.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </>
  );
};

export default Benefits;