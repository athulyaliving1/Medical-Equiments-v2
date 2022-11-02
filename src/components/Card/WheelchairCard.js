import React from "react";
import PopUp from "./PopUp";
import EnquiryForm from "../EnquiryForm";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function WheelchairCard({ Bedproject }) {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const { title, desc, desc1, desc2, image, type1, type2 } = Bedproject;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDetailsClose = () => {
    setDetails(false);
  };

  const handleDetailsOpen = () => {
    setDetails(true);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <div className="">
      <div className="relative max-w-sm px-6 pt-6 pb-2 transition duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105 font-Helvetica">
        <p className="absolute top-0 left-0 px-3 py-1 font-semibold text-white rounded-tl-lg rounded-br-lg bg-sky-800">
          {type1}
        </p>
        <p className="absolute top-0 right-0 px-3 py-1 font-semibold text-white rounded-tr-lg rounded-bl-lg bg-sky-800">
          {type2}
        </p>
        <div className="">
          <img className="w-full rounded-xl" src={image} alt="Colors" />
        </div>
        <h1 className="m-5 font-semibold text-center capitalize text-sky-800 xl:text-xl font-Poppins ">
          {title}
        </h1>
        <div className="flex justify-between my-6">
          <div>
            <>
              <button
                className="w-full px-5 py-2 mt-4 text-white bg-pink-500 shadow-lg xl:text-xl rounded-xl"
                onClick={handleDetailsOpen}
                onChange={handleFullWidthChange}
              >
                Details
              </button>
              <div>
                <BootstrapDialog
                  onClose={handleDetailsClose}
                  aria-labelledby="customized-dialog-title"
                  open={details}
                  fullWidth={fullWidth}
                  maxWidth={maxWidth}
                >
                  <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleDetailsClose}
                    className
                  >
                    <h1
                      value={maxWidth}
                      onChange={handleMaxWidthChange}
                      className="flex justify-center p-2 font-sans text-xl font-semibold underline md:text-xl xl:text-3xl text-sky-800 md:p-5"
                    >
                      Product Description
                    </h1>
                  </BootstrapDialogTitle>
                  <DialogContent dividers>
                    <PopUp desc={desc} />
                    <PopUp desc={desc1} />
                    <PopUp desc={desc2} />
                  </DialogContent>
                </BootstrapDialog>
              </div>
            </>
          </div>
          <div>
            <>
              <button
                className="w-full px-5 py-2 mt-4 text-white bg-pink-500 shadow-lg xl:text-xl rounded-xl"
                onClick={handleClickOpen}
              >
                Enquiry
              </button>

              <BootstrapDialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
                  <h1 className="flex justify-center p-2 font-sans text-xl font-semibold md:text-xl xl:text-3xl text-sky-800 md:p-5 ">
                    Sumbit Your Details
                  </h1>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                  <EnquiryForm />
                </DialogContent>
              </BootstrapDialog>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WheelchairCard;
