import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Modal,
  Radio,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { createAppoinment } from "../actions/appoinmentActions";

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

const RadioGroup = styled("div")({
  marginBottom: "10px",
  alignItems: "flex-start",
  display: "flex",
});

const ModalFooter = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "20px",
  padding: "10px 15px",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
});

function CreateAppoinment({ open, handleOpen, handleClose }) {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const appoinmentList = useSelector((state) => state.appoinmentList);

  const onSubmit = (data) => {
    let patientList = [];
    patientList = appoinmentList ? appoinmentList : [];
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
        gender: data?.gender,
        year: data?.date.split("-")[0],
        month: data?.date.split("-")[1],
        day: data?.date.split("-")[2],
        time: data?.time,
      });
      dispatch(createAppoinment(patientList));
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
            <RadioGroup>
              <label>Gender:</label>
              <div style={{display:'flex',marginLeft:"10px"}}>
                <div >
                  <input
                    {...register("gender")}
                    type="radio"
                    name="gender"
                    value="rain"
                    id="male"
                  />
                  <label>Male</label>
                </div>
                <div style={{marginLeft:"10px"}}>
                  <input
                    {...register("gender")}
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                  />
                  <label>Female</label>
                </div>
              </div>
            </RadioGroup>

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
                cursor: "pointer",
              }}
            />
          </ModalFooter>
        </form>
      </Box>
    </Modal>
  );
}

export default CreateAppoinment;
