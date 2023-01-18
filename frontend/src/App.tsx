import React from "react";
import "./App.css";
import Table from "./components/table";
import Form from "./components/form";
import { BiUserPlus } from "react-icons/bi";

function App() {
  return (
    <section>
      <main>
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800">
              Add Employee{" "}
              <span className="px-1">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
        </div>
        <div className="container mx-auto py-5">
          <Form />
        </div>
        <div className="container mx-auto py-5">
          <Table />
        </div>
      </main>
    </section>
  );
}

export default App;
