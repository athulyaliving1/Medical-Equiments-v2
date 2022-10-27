import React, { useState } from "react";
import Modal from "react-modal";
import liter5 from "../Assets/Oxygen concentrator 5L.jpg";
import liter10 from "../Assets/Oxygen concentrator 10L.jpg";
import PopUp from "./PopUp";
import EnquiryForm from "../EnquiryForm";

const assertMap = {
  liter5: liter5,
  liter10: liter10,
};

function OxygenCardMb({ Bedproject }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [popIsOpen, setPopIsOpen] = useState(false);

  const { title, desc, desc1, desc2, image, heading } = Bedproject;

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  const setPopIsOpenToTrue = () => {
    setPopIsOpen(true);
  };

  const setPopIsOpenToFalse = () => {
    setPopIsOpen(false);
  };
  return (
    <div className="bg-sky-100">
      <div class="max-w-sm bg-white px-6  pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative font-Helvetica">
        <p class="absolute top-0 left-0 bg-sky-800 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          Rental
        </p>
        <p class="absolute top-0 right-0 bg-sky-800  font-semibold py-1 px-3 text-white rounded-tr-lg rounded-bl-lg">
          Purchase
        </p>
        <div class="">
          <img class="w-full rounded-xl" src={assertMap[image]} alt="Colors" />
        </div>
        <h1 class="text-center text-sky-800 xl:text-xl   font-Poppins font-semibold   m-5 capitalize ">
          {title}
        </h1>
        <div class="my-6  justify-between flex">
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
                onClick={setPopIsOpenToTrue}
              >
                Enquiry
              </button>
              <Modal
                isOpen={popIsOpen}
                className="container px-5 mx-auto mt-16 md:w-3/6 lg:w-2/6 md:mt-44 "
                onRequestClose={() => setPopIsOpen(false)}
              >
                <button
                  className="float-right text-3xl text-red-700 md:text-5xl"
                  onClick={setPopIsOpenToFalse}
                >
                  <div>
                    <ion-icon name="close-circle"></ion-icon>
                  </div>
                </button>
                <div className="">
                  <EnquiryForm />
                </div>
              </Modal>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OxygenCardMb;
