import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedbacks }) {
  if (!feedbacks.length) {
    return <div className="feedback-empty">No feedback yet.</div>;
  }

  return (
    <ul className="feedback-list">
      {feedbacks.map((fb) => (
        <FeedbackItem key={fb._id} item={fb} />
      ))}
    </ul>
  );
}

export default FeedbackList;
