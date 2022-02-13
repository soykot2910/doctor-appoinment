import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  textAlign: "center",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
  boxSizing: "border-box",
};

const ModalHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  padding: "0px 15px",
  marginBottom: "30px",
});

const ModalBody = styled("div")({
  padding: "0px 20px",
});

const InputGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "10px",
  label: {
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    width: "90%",
    borderRadius: "4px",
    border: "1px solid gray",
  },
});

const ModalFooter = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "20px",
  padding: "10px 15px",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
});

function CreateAppoinment({ open, handleOpen, handleClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    let patientList = [];
    patientList = JSON.parse(localStorage.getItem("patientList"))
      ? JSON.parse(localStorage.getItem("patientList"))
      : [];
    if (
      patientList.some((v) => {
        return v.name === data?.name;
      })
    ) {
      alert("duplicate data");
    } else {
      patientList.push({
        name: data?.name,
        age: data?.age,
        gendar: data?.gendar,
        year: data?.date.split("-")[0],
        month: data?.date.split("-")[1],
        day: data?.date.split("-")[2],
      });
      localStorage.setItem("patientList", JSON.stringify(patientList));
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>
            <h3>Create Appoinment</h3>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </ModalHeader>
          <ModalBody>
            <InputGroup>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                {...register("name")}
              />
            </InputGroup>
            <InputGroup>
              <label>Age</label>
              <input
                className="form-control mt-1"
                type="number"
                placeholder="Enter Age"
                name="age"
                {...register("age")}
              />
            </InputGroup>
            <InputGroup>
              <label>Gender</label>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </InputGroup>

            <InputGroup>
              <label>Date</label>
              <input
                className="form-control mt-1"
                type="date"
                placeholder="Enter Date"
                name="date"
                {...register("date")}
              />
            </InputGroup>

            <InputGroup>
              <label>Time</label>
              <input
                className="form-control mt-1"
                type="time"
                placeholder="Enter Time"
                name="time"
                {...register("time")}
              />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outlined"
              sx={{ marginRight: "10px" }}
              onClick={handleClose}
            >
              Cancle
            </Button>
            <input
              type="submit"
              style={{
                background: "#1B5E20",
                color: "#fff",
                border: "1px solid #1b5e20",
                borderRadius: "4px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            />
          </ModalFooter>
        </form>
      </Box>
    </Modal>
  );
}

export default CreateAppoinment;
