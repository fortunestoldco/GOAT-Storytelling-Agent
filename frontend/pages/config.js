import { useState } from 'react';

const Config = () => {
  const [config, setConfig] = useState({
    endpoint: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({
      ...config,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the configuration settings
    console.log('Configuration saved:', config);
  };

  return (
    <div className="config-container">
      <h1>Configuration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="endpoint">Endpoint:</label>
          <input
            type="text"
            id="endpoint"
            name="endpoint"
            value={config.endpoint}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={config.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={config.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
      <style jsx>{`
        .config-container {
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
      `}</style>
    </div>
  );
};

export default Config;
