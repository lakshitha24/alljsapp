import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import EmployeLists from "./EmployeList";

beforeEach(() => {
  render(
    <Router>
      <Provider store={store}>
        <EmployeLists />
      </Provider>
    </Router>
  );
});

describe("Employe List display", () => {
  test("should add Employe Button", async () => {
    await waitFor(() => {
        const loadingText = screen.queryByText(/Add Employee/i);
      expect(loadingText).toBeInTheDocument();
    });
  });
  test('Should hide loading when successfully loaded', async () => {
    await waitFor(() => {
      const loadingText = screen.queryByText(/Add Employee/i);
      expect(loadingText).toBeInTheDocument();
    });
  });
});
