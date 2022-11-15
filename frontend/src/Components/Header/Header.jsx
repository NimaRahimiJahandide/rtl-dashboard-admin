import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsBrightnessHigh } from "react-icons/bs";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="admin-profile">
        <img src="/img/nimarahimi.jpg" alt="user" />
        <div>
          <h1>نیما رحیمی جهاندیده</h1>
          <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>

      <div className="header-left-section">
        <div className="search-box">
          <input type="text" placeholder="جست و جو بکنید ..." />
          <button>جست و جو</button>
        </div>

        <button className="header-left-icon">
          <AiOutlineBell />
        </button>
        
        <button className="header-left-icon">
          <BsBrightnessHigh />
        </button>
      </div>
    </div>
  );
}
