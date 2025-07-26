function FeedbackItem({ item }) {
  return (
    <li className="feedback-item">
      <p className="feedback-text">{item.text}</p>
      {/* rating display */}
      <p className="feedback-date">{new Date(item.createdAt).toLocaleString()}</p>
    </li>
  );
}

export default FeedbackItem;
