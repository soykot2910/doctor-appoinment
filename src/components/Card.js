import React from "react";
import { styled } from "@mui/system";

const CardWrapper = styled("div")({
  padding: "10px",
  border: "1px solid gray",
  margin: "5px",
  borderRadius: "4px",
  ul: {
    height: "80px",
    overflowY: "auto",
    marginLeft: "-50px",
    li: {
      listStyleType: "none",
      background: "gray",
      margin: "4px",
      padding: "4px",
      borderRadius: "1px",
      color: "#fff",
    },
  },
});

const Card = ({ index, monthData }) => {
  return (
    <CardWrapper>
      <p>Date: {index + 1}</p>
      <ul>
        {Object.keys(monthData).map((idex) => {
          if (monthData[idex].day == index + 1) {
            return <li>{monthData[idex].name}</li>;
          }
        })}
      </ul>
    </CardWrapper>
  );
};

export default Card;
