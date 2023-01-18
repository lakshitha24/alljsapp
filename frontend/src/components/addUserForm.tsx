import React from 'react';
import { BiPlus } from "react-icons/bi";

const AddUserForm = () => {
    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4">
        <div className="input-type">
          <input
            type="text"
            name="firstname"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            placeholder="FirstName"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            name="lastname"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            placeholder="LastName"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            name="Email"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            placeholder="email"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            name="Phone"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            placeholder="phone"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            name="gender"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            placeholder="gender"
          />
        </div>
        <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Add{" "}
        <span className="px-1">
          <BiPlus size={24}></BiPlus>
        </span>
      </button>
      </form>
    );
};

export default AddUserForm;
