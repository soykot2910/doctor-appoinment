import React from "react";
import { styled } from "@mui/system";
import { Card } from "@mui/material";

const CardWrapper = styled(Card)({
  margin: "5px",
  borderRadius: "4px",
  backgroundColor: "#fff",
  h5: { textAlign: "center", fontSize: "1.1rem" },
  p: { marginLeft: "20px" },
  height:"200px",
  ul: {
    height: "80px",
    overflowY: "auto",
    li: {
      margin: "8px",
      padding: "4px",
      borderRadius: "1px",
      color: "#fff",
      fontWeight: "500",
    },
  },
});

const CalenderCard = ({ selectedMonth, selectedYear, index, monthData }) => {
  return (
    <CardWrapper>
      <h5>
        Date: {index + 1}/{selectedMonth}/{selectedYear}
      </h5>
      <p>All Appoinment list:</p>
      <ol>
        {Object.keys(monthData).map((idex) => {
          if (monthData[idex].day == index + 1) {
            return (
              <li>
                Name: {monthData[idex].name}  <span style={{marginLeft:'10px'}}>time: {monthData[idex].time}</span>
              </li>
            );
          }
        })}
      </ol>
    </CardWrapper>
  );
};

export default CalenderCard;
