import React from "react";
import {NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sidebar-links">
        <NavLink to="/">
            <AiOutlineHome className="icons" />
            صفحه اصلی
        </NavLink>
        <NavLink to="/products">
            <MdProductionQuantityLimits className="icons" />
            محصولات
        </NavLink>
        <NavLink to="/comments">
            <BiCommentDetail className="icons" />
            کامنت ها
        </NavLink>
        <NavLink to="/users">
            <FiUsers className="icons" />
            کاربران
        </NavLink>
        <NavLink to="/orders">
            <BsBagCheck className="icons" />
            سفارشات
        </NavLink>
        <NavLink to="/prodoffsucts">
            <BsCurrencyDollar className="icons" />
            تخفیف ها
        </NavLink>
      </ul>
    </div>
  );
}
