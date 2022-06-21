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

async function InventoryData() {
  const manufacturerResponse = await fetch('http://localhost:8100/api/manufacturers');
  const automobileResponse = await fetch('http://localhost:8100/api/automobiles');
  const vehiclemodelsResponse = await fetch('http://localhost:8100/api/models');
  if (manufacturerResponse.ok && automobileResponse.ok && vehiclemodelsResponse.ok) {
    const manufacturerData = await manufacturerResponse.json()
    const automobilesData = await automobileResponse.json()
    const vehiclemodelsData = await vehiclemodelsResponse.json()
    root.render(
      <React.StrictMode>
        <App manufacturers={manufacturerData.manufacturers} automobiles={automobilesData} vehiclemodels={vehiclemodelsData} />
      </React.StrictMode>
    );
  }
  else {
    console.error('response is not ok')
  }
}
InventoryData();


// async function ServiceHistory() {
//   const servresponse = await fetch('http://localhost:8080/api/services/')
//   const 
// }