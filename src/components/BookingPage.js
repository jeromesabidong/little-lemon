import { useEffect, useReducer, useState } from "react";
import BookingForm from "../forms/BookingForm";

const BookingPage = () => {

    const updateTimes = (times, action) => {
        switch (action.type) {
            case 'get':
                return times;
            default:
                throw Error(`Unknown action: ${action.type}`);
        }
    }

    const initialTimes = [
        {time: "17:00"},
        {time: "19:00"},
        {time: "20:30"},
    ];

    const [times, timesDispatch] = useReducer(
        updateTimes,
        initialTimes
    );

    return <div className="bg-base-200 min-h-screen">
        <BookingForm times={times} timesDispatch={timesDispatch} />
    </div>
}

export default BookingPage;