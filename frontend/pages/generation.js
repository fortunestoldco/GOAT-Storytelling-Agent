import { useState } from 'react';

const Generation = () => {
  const [topic, setTopic] = useState('');
  const [story, setStory] = useState('');

  const handleChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Generate the story based on the topic
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });
    const data = await response.json();
    setStory(data.story);
  };

  return (
    <div className="generation-container">
      <h1>Story Generation</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="topic">Topic:</label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={topic}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Generate</button>
      </form>
      {story && (
        <div className="story-container">
          <h2>Generated Story</h2>
          <p>{story}</p>
        </div>
      )}
      <style jsx>{`
        .generation-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        input {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
        .story-container {
          margin-top: 20px;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .story-container h2 {
          margin-bottom: 10px;
        }
        .story-container p {
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};

export default Generation;
