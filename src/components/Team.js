import React from "react";
import Card from "./Card";
import img from "./assets/img.jpeg";
import './team.css'

export default function Team() {
  return (
    <>
      <div className="team">
        <div className="final-year">
          <h3>Final Year</h3>
          <div className="images">
          <Card name="Suryansh Singh Bisen" imgurl={img} />
          <Card name="Suryansh Singh Bisen" imgurl={img} />
          <Card name="Suryansh Singh Bisen" imgurl={img} />
          <Card name="Suryansh Singh Bisen" imgurl={img} />
          </div>
          
        </div>
        <div className="third-year">
          <h3>Third Year</h3>
          <div className="images">
          <Card name="Suryansh Singh Bisen" imgurl={img} />
          <Card name="Suryansh Singh Bisen" imgurl={img} />
          <Card name="Suryansh Singh Bisen" imgurl={img} />
          <Card name="Suryansh Singh Bisen" imgurl={img} />
          </div>
          
        </div>
      </div>
    </>
  );
}
