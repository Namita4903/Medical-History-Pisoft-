// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router";
// import Navbar from '../../src/components/navbar';
// import Footer from '../../src/components/footer';

// import "../dashboard.css";
// import Profile from "../assets/images/profile.png";

// const Dashboard = () => {
//   const [enter, setEnter] = useState();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const enterValue = localStorage.getItem("Username");
//     setEnter(enterValue);
//   }, []);

//   // Dummy cart item for subscription checkout
//   const cart = [
//     {
//       id: "premium-plan",
//       name: "Premium Subscription",
//       price: 5,
//       quantity: 1,
//     }
//   ];

//   const handleCheckout = async () => {
//     try {
//       const response = await axios.post("http://localhost:5001/api/auth/getPaymentStatus", {
//         cartItems: cart,
//       });
  
//       console.log("Checkout session response:", response);
//       // window.location.href = response.data.url;
//     } catch (error) {
//       console.error("Payment error:", error);
//     }
//   };
  
//   const handleMedicalRecordsClick = () => {
//     navigate("/report");
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="dashboard-container">
//         <aside className="sidebar">
//           <h2>User Dashboard</h2>
//           <ul>
//             {/* Add navigation links here if needed */}
//           </ul>

//           <div className="subscription-box">
//             <h2>Subscription Plans</h2>
//             <div className="subscription-plan">
//               <h3>Basic</h3>
//               <p>Free | Limited Access</p>
//               <button>Select</button>
//             </div>
//             <div className="subscription-plan">
//               <h3>Premium</h3>
//               <p>$5/month | Advanced Features</p>
//               <button onClick={handleCheckout}>Select</button>
//             </div>
//           </div>
//         </aside>

//         <main className="dashboard-content">
//           <div className="welcome-section">
//             <img src={Profile} alt="User Icon" className="user-icon" />
//             <h1>Welcome, {enter}!</h1>
//           </div>
//           <p>
//             Track your medical history, appointments, and prescriptions with ease.
//           </p>

//           <div className="dashboard-cards">
//             <div className="card" onClick={handleMedicalRecordsClick} style={{ cursor: "pointer" }}>
//               <h3>📂 Medical Records</h3>
//               <p>View and manage all your medical documents.</p>
//             </div>
//             <div className="card">
//               <h3>🩺 Doctors</h3>
//               <p>Connect with healthcare professionals.</p>
//             </div>
//             <div className="card">
//               <h3>📅 Appointments</h3>
//               <p>Check your upcoming doctor visits.</p>
//             </div>
//            {/*  <div className="card">
//               <h3>💊 Prescriptions</h3>
//               <p>View and track your prescribed medicines.</p>
//             </div> */}
//           </div>
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Dashboard;







import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Navbar from '../../src/components/navbar';
import Footer from '../../src/components/footer';

import "../dashboard.css";
import Profile from "../assets/images/profile.png";

const Dashboard = () => {
  const [enter, setEnter] = useState();
  const navigate = useNavigate();
  const [showDoctorsTable, setShowDoctorsTable] = useState(false);

  const doctorData = [
    { name: "Dr. A. Sharma", phone: "9876543210" },
    { name: "Dr. B. Verma", phone: "9123456789" },
    { name: "Dr. C. Kapoor", phone: "9988776655" },
      { name: "Dr. B. Verma", phone: "9123456789" },
        { name: "Dr. B. Verma", phone: "9123456789" },
          { name: "Dr. B. Verma", phone: "9123456789" },
            { name: "Dr. B. Verma", phone: "9123456789" }
            
            
  ];

  useEffect(() => {
    const enterValue = localStorage.getItem("Username");
    setEnter(enterValue);
  }, []);

  const cart = [
    {
      id: "premium-plan",
      name: "Premium Subscription",
      price: 5,
      quantity: 1,
    }
  ];

  const handleCheckout = async () => {
    try {
      const response = await axios.post("http://localhost:5001/api/auth/getPaymentStatus", {
        cartItems: cart,
      });

      console.log("Checkout session response:", response);
      // window.location.href = response.data.url;
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const handleMedicalRecordsClick = () => {
    navigate("/report");
  };

  const handleDoctorsClick = () => {
    setShowDoctorsTable((prev) => !prev);
  };

  const handleBookAppointment = (doctorName) => {
    alert(`Appointment booked with ${doctorName}`);
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <aside className="sidebar">
          <h2>User Dashboard</h2>
          <ul>
            {/* Add navigation links here if needed */}
          </ul>

          <div className="subscription-box">
            <h2>Subscription Plans</h2>
            <div className="subscription-plan">
              <h3>Basic</h3>
              <p>Free | Limited Access</p>
              <button>Select</button>
            </div>
            <div className="subscription-plan">
              <h3>Premium</h3>
              <p>$5/month | Advanced Features</p>
              <button onClick={handleCheckout}>Select</button>
            </div>
          </div>
        </aside>

        <main className="dashboard-content">
          <div className="welcome-section">
            <img src={Profile} alt="User Icon" className="user-icon" />
            <h1>Welcome, {enter}!</h1>
          </div>
          <p>
            Track your medical history, appointments, and prescriptions with ease.
          </p>

          <div className="dashboard-cards">
            <div
              className="card"
              onClick={handleMedicalRecordsClick}
              style={{ cursor: "pointer" }}
            >
              <h3>📂 Medical Records</h3>
              <p>View and manage all your medical documents.</p>
            </div>

            <div
              className="card"
              onClick={handleDoctorsClick}
              style={{ cursor: "pointer" }}
            >
              <h3>🩺 Doctors</h3>
              <p>Connect with healthcare professionals.</p>

              <div className={`doctor-table-wrapper ${showDoctorsTable ? "open" : ""}`}>
                <table className="doctor-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctorData.map((doc, index) => (
                      <tr key={index}>
                        <td>{doc.name}</td>
                        <td>{doc.phone}</td>
                        <td>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBookAppointment(doc.name);
                            }}
                          >
                            Book Appointment
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card">
              <h3>📅 Appointments</h3>
              <p>Check your upcoming doctor visits.</p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
