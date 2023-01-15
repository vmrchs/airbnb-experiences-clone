import React from "react";
import RodneyMullen from "../assets/rodney-mullen.png";
import Star from "../assets/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={RodneyMullen} alt="" className="card--image" />
      <div className="card--stats">
        <img src={Star} alt="" className="card--star" />
        <span>5.0</span>
        <span className="gray"> (6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Rodney Mullen</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
