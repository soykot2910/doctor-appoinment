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
import { useDispatch, useSelector } from "react-redux";
import { AppsOutageOutlined } from "@mui/icons-material";
import CalenderCard from "./components/Card";

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
    letterSpacing:"1px"
  },
  ul: {
    marginLeft:"-30px",
    li: {
      listStyleType: "none",
      fontSize: "18px",
      margin:"8px 0px",
      fontWeight:600,
      textDecoration:"underline",
      cursor:'pointer'
    },
  },
  ".image__Wrapper": {
    width: "100px",
    height: "100px",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
});

const MainContent = styled("div")({
  width: "80%",
  padding: "10px 30px",
  h3: {
    textAlign: "center",
    fontSize: "25px",
    marginBottom: "30px",
  },
});

const MainContentHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "30px",
});

const App = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);

  const appoinmentList = useSelector((state) => state.appoinmentList);
  // console.log(appoinmentList)

  const rowDto = [];

  const sortingByYear = (year) => {
    Object.keys(appoinmentList).map((idx) => {
      if (appoinmentList[idx].year == year) {
        rowDto.push(appoinmentList[idx]);
      }
    });
  };
  sortingByYear(selectedYear);

  const monthData = [];
  const sortingByMonth = (month) => {
    Object.keys(rowDto).map((idx) => {
      if (rowDto[idx].month == month) {
        monthData.push(rowDto[idx]);
      }
    });
  };
  sortingByMonth(selectedMonth);

  return (
    <>
      <Wrapper>
        <SideBar>
          <h3>HEALTH PORTAL</h3>
          <div className="image__Wrapper">
            <img src="https://www.pngitem.com/pimgs/m/455-4554869_doctor-with-stethoscope-png-png-download-doctor-images.png" />
          </div>
          <ul>
            <li>Deshboard</li>
            <li>All Doctor List</li>
            <li>Appointments</li>
          </ul>
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

          <Grid container spacing={1}>
            {Array(30)
              .fill()
              .map((_, index) => (
                <Grid item xs={6} md={4} lg={3}>
                  <CalenderCard
                    selectedYear={selectedYear}
                    selectedMonth={selectedMonth}
                    key={index}
                    index={index}
                    monthData={monthData}
                  />
                </Grid>
              ))}
          </Grid>
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
