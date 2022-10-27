import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function Testimonal() {
  return (
    <div>
      <div className="flex items-center justify-between  absolute z-0">
        <div className="w-1/3 bg-white " />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={2}
        >
          <h1 className="text-5xl font-bold xl:block  leading-tight text-sky-800  flex text-justify">
            What our customers are saying
          </h1>
          <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-sky-800">
            What our customers are saying
          </h1>
          <Slider>
            <Slide index={0} tabIndex="null">
              <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div class="flex justify-center -mt-16 md:justify-end">
                  <img
                    class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                    alt="Testimonial avatar"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                  />
                </div>

                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                  Design Tools
                </h2>

                <p class="mt-2 text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>

                <div class="flex justify-end mt-4">
                  <p class="text-xl font-medium text-blue-500 dark:text-blue-300">
                    John Doe
                  </p>
                </div>
              </div>
              <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div class="flex justify-center -mt-16 md:justify-end">
                  <img
                    class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                    alt="Testimonial avatar"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                  />
                </div>

                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                  Design Tools
                </h2>

                <p class="mt-2 text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>

                <div class="flex justify-end mt-4">
                  <p class="text-xl font-medium text-blue-500 dark:text-blue-300">
                    John Doe
                  </p>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg 0">
                <div class="flex justify-center -mt-16 md:justify-end">
                  <img
                    class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full"
                    alt="Testimonial avatar"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                  />
                </div>

                <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
                  Design Tools
                </h2>

                <p class="mt-2 text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>

                <div class="flex justify-end mt-4">
                  <p class="text-xl font-medium text-blue-500 dark:text-blue-300">
                    John Doe
                  </p>
                </div>
              </div>
              <div class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div class="flex justify-center -mt-16 md:justify-end">
                  <img
                    class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                    alt="Testimonial avatar"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                  />
                </div>

                <h2 class="mt-2 text-2xl font-semibold text-gray-800 md:mt-0 md:text-3xl">
                  Design Tools
                </h2>

                <p class="mt-2 text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>

                <div class="flex justify-end mt-4">
                  <p class="text-xl font-medium text-blue-500 dark:text-blue-300">
                    John Doe
                  </p>
                </div>
              </div>
            </Slide>
          </Slider>
          <div className="flex items-center mt-8">
            <ButtonBack
              className="cursor-pointer "
              role="button"
              aria-label="previous slide"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                alt="previous"
              />
            </ButtonBack>

            <ButtonNext
              role="button"
              aria-label="next slide"
              className="cursor-pointer ml-2"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                alt="next"
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
