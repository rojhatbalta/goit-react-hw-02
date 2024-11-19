import PropTypes from "prop-types";

export default function Feedback({ feedback, totalFeedback, positiveValue }) {
  return (
    <div>
      <p>Good: {feedback.good} </p>
      <p>Neutral: {feedback.neutral} </p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback} </p>
      <p>Positive: {positiveValue}%</p>
    </div>
  );
}

Feedback.propTypes = {
  feedback: PropTypes.object.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveValue: PropTypes.number.isRequired,
};
