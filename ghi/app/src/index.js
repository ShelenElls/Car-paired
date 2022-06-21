import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// async function for appointment list 

async function AppointmentList() {
  const response = await fetch('http://localhost:8080/api/services/');
  if (response.ok) {
    const data = await response.json();
    root.render(
      <React.StrictMode>
        <App service={data.service} />
      </React.StrictMode>
    );
  }
}
AppointmentList();

// async function ServiceHistory() {
//   const servresponse = await fetch('http://localhost:8080/api/services/')
//   const 
// }