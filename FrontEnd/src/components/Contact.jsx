import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleContact = () => {
    axios
      .post("http://localhost:8085/", value)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const notify = () => toast("Submitted Successfully!");

  return (
    <div id="contact" className="w-full h-screen px-[10%]">
      <div className="text-center mt-8">
        <h2 className="text-xl text-red-600">Contact Us</h2>
        <h1 className="text-2xl">Send your information to us</h1>
      </div>

      {/* container */}
      <form
        action=""
        onSubmit={handleContact}
        className="mt-[5%] flex justify-center flex-col items-center gap-y-5"
      >
        <div>
          <input
            className="border-none outline-none p-3 bg-gray-600 px-[5%] text-white rounded w-96"
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setValue({ ...value, name: e.target.value });
            }}
          />
        </div>

        <div>
          <input
            className="border-none outline-none p-3 bg-gray-600 px-[5%] text-white rounded w-96"
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => {
              setValue({ ...value, email: e.target.value });
            }}
          />
        </div>

        <div>
          <input
            className="border-none outline-none p-3 bg-gray-600 px-[5%] text-white rounded w-96"
            type="number"
            placeholder="Enter Your Phone"
            onChange={(e) => {
              setValue({ ...value, phone: e.target.value });
            }}
          />
        </div>

        <div>
          <input
            className="border-none outline-none p-3 bg-gray-600 px-[5%] text-white rounded w-96"
            type="text"
            placeholder="Enter Your Address"
            onChange={(e) => {
              setValue({ ...value, address: e.target.value });
            }}
          />
        </div>

        <div>
          <button
            onClick={notify}
            className="bg-lime-600 px-4 py-2 text-white rounded"
          >
            Send Your Inform
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default Contact;
