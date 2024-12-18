import { useState, useEffect } from "react";
import Description from "./components/Description";
import Options from "./components/Options";
import Feedback from "./components/FeedBack";
import Notification from "./components/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const localFeedback = JSON.parse(localStorage.getItem("feedback"));
    return localFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  function updateFeedback(feedbackType) {
    setFeedback((feedback) => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  }

  function resetFeedback() {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  }

  const totalFeedback = feedback.neutral + feedback.good + feedback.bad;

  const positiveValue = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveValue={positiveValue}
        />
      )}
    </>
  );
}

export default App;
