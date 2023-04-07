import React from "react";
import axios from "axios"; //npm i axios
import "./App.css";
import { notification } from "antd"; //npm init antd


//json   "proxy": "http://localhost:8005",

const App = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    phonenumber: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8005/api/sendEmail", formData);
      notification.success({ message: "mail sended successfully" }); //npm init antd
    } catch (err) {
      console.log(err);
    }                   
  };
  const handleFormChnage = (e, field) => {
    console.log(e, field);
    setFormData((pre) => ({ ...pre, [field]: e.target.value }));
  
  };

  return (
    <div>
      <div>
        <div className="form">
          <h1>contact us</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="text_field">
              <input
                type="text"
                name="name"
                required
                onChange={(e) => {
                  handleFormChnage(e, "name");
                }}
                value={formData.name}
              />
              <span></span>
              <label>Full Name</label>
            </div>
            <div className="text_field">
              <input
                name="phonenumber"
                type="number"
                required
                onChange={(e) => {
                  handleFormChnage(e, "phonenumber");
                }}
                value={formData.phonenumber}
              />
              <span></span>
              <label>phone number</label>
            </div>
            <div className="text_field">
              <input
                type="email"
                name="email"
                required
                onChange={(e) => {
                  handleFormChnage(e, "email");
                }}
                value={formData.email}
              />
              <span></span>
              <label>Email Address</label>
            </div>
            <div className="text_field">
              <textarea
                type="text"
                name="message"
                required
                onChange={(e) => {
                  handleFormChnage(e, "message");
                }}
                value={formData.message}
              />
              <span className="textarea_span"></span>
              <label className="textarea_label">message</label>
            </div>
            <div className="button">
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
