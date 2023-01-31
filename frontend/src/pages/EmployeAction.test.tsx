import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import EmployeAction from "./EmployeAction";

beforeEach(() => {
  render(
    <Router>
      <Provider store={store}>
        <EmployeAction />
      </Provider>
    </Router>
  );
});

describe("Employe Action display", () => {
    test('first name filed shoude be there',()=>{
        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    });
    test('last name filed shoude be there',()=>{
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    });
    test('email filed shoude be there',()=>{
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    });
    test('phone filed shoude be there',()=>{
        expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    });
});
