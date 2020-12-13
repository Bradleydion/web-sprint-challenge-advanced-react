import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    expect (header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    const firstInput = screen.getByLabelText(/first name/i)
    const lastInput = screen.getByLabelText(/last name/i)
    
    userEvent.type(firstInput, "Brad")
    userEvent.type(lastInput, "Dion")
    await act(async () => {const button = screen.getByRole("button",{name:/checkout/i})
    userEvent.click(button)
})
 const myName = screen.getByText(/Brad/i)
//  const notMyName = screen.getByText(/Andrew/i)
 expect (myName).toBeInTheDocument()
//  expect (notMyName).toBeInTheDocument()
});
