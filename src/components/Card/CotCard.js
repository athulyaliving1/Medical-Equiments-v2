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
      <div className="relative max-w-sm px-6 pt-6 pb-2 transition duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105">
        <p className="absolute top-0 left-0 px-3 py-1 font-semibold text-white rounded-tl-lg rounded-br-lg bg-matisse-800">
          Rental
        </p>
        <p className="absolute top-0 right-0 px-3 py-1 font-semibold text-white rounded-tr-lg rounded-bl-lg bg-matisse-800">
          Purchase
        </p>
        <div className="">
          <img
            className="w-full rounded-xl"
            src={assertMap[image]}
            alt="Colors"
          />
        </div>
        <h1 className="m-5 font-semibold text-center capitalize text-matisse-800 xl:text-xl font-Helvetica md:text-3xl ">
          {title}
        </h1>
        <div className="flex justify-center gap-2 my-6">
          <div>
            <>
              <button
                className="w-full px-5 py-2 mt-4 text-white bg-pink-500 shadow-lg xl:text-xl rounded-xl"
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
                  <div classNameName="underline">
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
                className="w-full px-5 py-2 mt-4 text-white bg-pink-500 shadow-lg xl:text-xl rounded-xl"
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
                  <h1 className="flex justify-center p-2 font-sans text-xl font-semibold md:text-xl xl:text-3xl text-matisse-800 md:p-5 ">
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
