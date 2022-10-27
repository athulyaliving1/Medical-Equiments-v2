import React, { useState } from "react";
import PopUp from "./PopUp";

import Modal from "react-modal";
import basicmedicalcot from "../Assets/basic-medical-cot-for-home-use.jpg";
import EnquiryForm from "../EnquiryForm";

const assertMap = {
  basicmedicalcot: basicmedicalcot,
};

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

function CotCard({ Bedproject }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [open, setOpen] = React.useState(false);

  const { title, desc, desc1, desc2, image } = Bedproject;

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <div class="max-w-sm bg-white px-6  pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative">
        <p class="absolute top-0 left-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          Rental
        </p>
        <p class="absolute top-0 right-0 bg-sky-800  font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg">
          Purchase
        </p>
        <div class="">
          <img class="w-full rounded-xl" src={assertMap[image]} alt="Colors" />
        </div>
        <h1 class="text-center text-sky-800 xl:text-xl   font-Helvetica  font-semibold  md:text-3xl m-5 capitalize ">
          {title}
        </h1>
        <div class="my-6 gap-2 justify-center flex">
          <div>
            <>
              <button
                class="mt-4 xl:text-xl   w-full text-white bg-pink-500 px-5 py-2 rounded-xl shadow-lg"
                onClick={setModalIsOpenToTrue}
              >
                Details
              </button>

              <Modal
                isOpen={modalIsOpen}
                className="container px-5 mx-auto md:w-3/6 lg:w-2/6 mt-44"
                onRequestClose={() => setModalIsOpen(false)}
              >
                <button
                  className="float-right text-3xl text-red-700 md:text-5xl "
                  onClick={setModalIsOpenToFalse}
                >
                  <div>
                    <ion-icon name="close-circle"></ion-icon>
                  </div>
                </button>
                <div className="pt-16 ">
                  <div className="underline">
                    <PopUp desc={heading} />
                  </div>

                  <PopUp desc={desc} />
                  <PopUp desc={desc1} />
                  <PopUp desc={desc2} />
                </div>
              </Modal>
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

export default CotCard;
