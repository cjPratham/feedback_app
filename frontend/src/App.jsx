import { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/feedback')
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  // Submit to backend
  const addFeedback = async (feedback) => {
    const res = await fetch('http://localhost:5000/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: feedback.text, rating: 5 }), // add rating if needed feedback.rating
    });

    const data = await res.json();
    setFeedbacks([data, ...feedbacks]);
  };

  return (
    <div className="App">
      <h1>Feedback App</h1>
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

export default App;
