import { useEffect, useReducer, useState } from "react";
import BookingForm from "../forms/BookingForm";
import { fetchAPI, submitAPI } from "../external/api";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const timesReducer = (times, action) => {
    switch (action.type) {
        case 'get':
            return [...times];
        case 'set':
            return action.data.map((el) => { return {time: el} });
        default:
            throw Error(`Unknown action: ${action.type}`);
    }
}

const initialTimes = [];

const BookingPage = () => {

    const [date, setDate] = useState(null)
    const navigate = useNavigate();

    const [times, timesDispatch] = useReducer(
        timesReducer,
        initialTimes
    );

    const initializeTimes = () => {
        let initialDate = moment().format('YYYY-MM-DD')

        setDate(initialDate);

        fetchAPI(initialDate)
            .then((res) => { timesDispatch({ type: 'set', data: res}) })
    }

    const updateTimes = (date) => {
        setDate(date)

        fetchAPI(date)
            .then(res => { timesDispatch({ type: 'set', data: res}) });
    }

    const submitForm = (formData) => {
        submitAPI(formData).then(() => { navigate('/confirmed') });
    }

    useEffect(() => {
        initializeTimes();
    }, [])

    return <div className="bg-base-200 min-h-screen">
        <BookingForm times={times} updateTimes={updateTimes} submitForm={submitForm} date={date} />
    </div>
}

export default BookingPage;