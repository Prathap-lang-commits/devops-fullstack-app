import React, { useEffect, useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('/api/')
      .then(response => response.text())
      .then(data => setBackendMessage(data))
      .catch(error => console.error('Error fetching from backend:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>🚀 Full Stack DevOps Project</h1>
      <p>🔄 Message from backend:</p>
      <h2 style={{ color: 'green' }}>{backendMessage}</h2>
    </div>
  );
}

export default App;

