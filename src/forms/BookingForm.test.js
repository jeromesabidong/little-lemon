import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import BookingPage from "../components/BookingPage";

test('Renders date label', () => {
    render(<BookingForm times={[]}  />);
    const headingElement = screen.getByText(/Choose date/);

    expect(headingElement).toBeInTheDocument();
})

test('Initializes times', () => {
    render (<BookingPage />);
    const dropdown = screen.getByText('20:30');

    expect(dropdown).toBeInTheDocument();
})