import PropTypes from "prop-types";

export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}{" "}
      {/* <button onClick={resetFeedback}>Reset</button> */}
    </div>
  );
}

Options.propTypes = {
  updateFeedback: PropTypes.string.isRequired,
  resetFeedback: PropTypes.string.isRequired,
  totalFeedback: PropTypes.string.isRequired,
};