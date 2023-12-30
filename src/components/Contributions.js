import React from "react";
import ContributionCard from "./ContributionCard";
import img from "./assets/img.jpeg";
import './contributions.css'

export default function Contributions() {
  return (
    <>
      <div className="contributions">
        <ContributionCard imgurl={img} name="Narendra Modi" type="pencil"/>
        <ContributionCard imgurl={img} name="Narendra Modi" type="pencil"/>
      </div>
    </>
  );
}
