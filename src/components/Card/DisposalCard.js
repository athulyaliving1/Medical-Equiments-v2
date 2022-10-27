import React from "react";
import PopUp from "./PopUp";
import EnquiryForm2 from "../EnquiryForm2";
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

function DisposalCard({ Bedproject }) {
  const [details, setDetails] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const { title, desc, desc1, desc2, image } = Bedproject;

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
    <div className="bg-sky-100">
      <div class="max-w-sm bg-white px-6  pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative font-Helvetica">
        <div className="">
          <p class="grid justify-center   absolute top-0 left-0 bg-sky-800 text-white font-semibold py-1 px-3 w-full  rounded-tr-lg rounded-tl-lg">
            Purchase
          </p>
        </div>
    
        <div class="">
          <img class="w-full rounded-xl" src={image} alt="Colors" />
        </div>
        <h1 class="text-center text-sky-800 xl:text-xl font-Poppins    font-semibold   m-5 capitalize ">
          {title}
        </h1>
        <div class="my-6  justify-between flex">
          <div>
            <>
              <button
                class="mt-4 xl:text-xl   w-full text-white bg-pink-500 px-5 py-2 rounded-xl shadow-lg"
                onClick={handleDetailsOpen}
                onChange={handleFullWidthChange}
              >
                Details
              </button>
              <div>
                <BootstrapDialog
                  fullWidth={fullWidth}
                  maxWidth={maxWidth}
                  onClose={handleDetailsClose}
                  aria-labelledby="customized-dialog-title"
                  open={details}
                >
                  <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleDetailsClose}
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
                class="mt-4 xl:text-xl   w-full text-white bg-pink-500  px-5 py-2 rounded-xl shadow-lg"
                onClick={handleClickOpen}
              >
                Enquiry
              </button>
              <BootstrapDialog
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
                  <EnquiryForm2 />
                </DialogContent>
              </BootstrapDialog>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisposalCard;
