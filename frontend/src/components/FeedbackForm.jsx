import { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm({ addFeedback }) {
  const [text, setText] = useState('');
  // rating state can be added if needed

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addFeedback({ text, date: new Date().toLocaleString()}); // pass rating too
      setText('');
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <textarea
        className="feedback-input"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write your feedback..."
        rows={3}
      />
      {/* add rating input */}
      <button className="feedback-btn" type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
