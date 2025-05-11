import React from "react";
import { FaTv } from "react-icons/fa";
import reasonsData from "../data/ReasonsData";

const Reasons = () => {
  return (
    <>
    <div className="reasons-heading">
          <h2>More Reasons to Join</h2>
        </div>
      <div className="reasons-container">
        {reasonsData.map((reason) => (
        <div className="reason">
          <div className="text-container">
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-detail">
              {reason.detail}
            </p>
          </div>

          <div className="symbol">
            {reason.symbol}
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default Reasons;
