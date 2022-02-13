import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { styled } from "@mui/system";
import CreateAppoinment from "./components/CreateAppoinment";
import Card from "./components/Card";

const Wrapper = styled("div")({
  display: "flex",
});

const SideBar = styled("div")({
  backgroundColor: "#EDEFF1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 8,
  width: "20%",
  h3: {
    fontSize: "20px",
  },
  ".image__Wrapper": {
    width: "60px",
    height: "60px",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
});

const MainContent = styled("div")({
  backgroundColor: "#F1F4F8",
  width: "80%",
  padding: "10px 30px",
  h3: {
    textAlign: "center",
    fontSize: "25px",
  },
});

const MainContentHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const MainContentBody = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexWrap:'wrap',
  backgroundColor:"#fff",
  marginTop:'20px'
});

const App = () => {
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);

  const data = [
    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },
    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "fsds",
      year: "2022",
    },
    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },
    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },
    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },
    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },

    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },
    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },
    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },

    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },
    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },
    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },
    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2022",
    },

    {
      age: "20",
      day: "09",
      gendar: "Male",
      month: "02",
      name: "soykot",
      year: "2021",
    },
  ];

  const rowDto = [];

  const sortingByYear = (year) => {
    Object.keys(data).map((idx) => {
      if (data[idx].year == year) {
        rowDto.push(data[idx]);
      }
    });
  };
  sortingByYear(selectedYear);

  const monthData = [];
  const sortingByMonth = (month) => {
    Object.keys(rowDto).map((idx) => {
      if (rowDto[idx].month == month) {
        monthData.push(data[idx]);
      }
    });
  };
  sortingByMonth(selectedMonth);

  return (
    <>
      <Wrapper>
        <SideBar>
          <h3>HEALTHEX</h3>
          <div className="image__Wrapper">
            <img src="https://www.pngitem.com/pimgs/m/455-4554869_doctor-with-stethoscope-png-png-download-doctor-images.png" />
          </div>
        </SideBar>
        <MainContent>
          <h3>Doctor Appoinment List</h3>
          <MainContentHeader>
            <div>
              <FormControl sx={{ width: "200px", marginRight: "20px" }}>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  label="year"
                >
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2021">2021</MenuItem>
                  <MenuItem value="2020">2020</MenuItem>
                  <MenuItem value="2019">2019</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                <Select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  label="month"
                >
                  {Array(12)
                    .fill()
                    .map((_, i) => (
                      <MenuItem value={i + 1}>{i + 1}</MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
            <Button
              variant="contained"
              style={{ height: "50px" }}
              onClick={handleOpen}
            >
              Create Appoinment
            </Button>
          </MainContentHeader>

          <MainContentBody>
            {Array(30)
              .fill()
              .map((_, index) => (
                <Card keyi={index} index={index} monthData={monthData}/>
              ))}
          </MainContentBody>
        </MainContent>
      </Wrapper>
      <CreateAppoinment
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default App;
