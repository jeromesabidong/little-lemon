import moment from "moment";
import { useEffect, useState } from "react";

const BookingForm = ( props ) => {
    const [form, setForm] = useState({
        guests: 1,
        date: moment().format('YYYY-MM-DD'),
        time: '',
        occasion: '',
    });

    const initForm = () => {
        setForm({
            guests: 1,
            date: moment().format('YYYY-MM-DD'),
            time: '17:00',
            occasion: 'anniversary',
        })
    }

    const handleSubmit = (e) => {
        // do something
        e.preventDefault()

        console.log(`Having ${form.guests} guest/s on ${form.date} ${form.time} for a ${form.occasion} celebration.`)
        initForm();
    }

    let handleDateChange = (e) => {
        setForm({...form, date: moment(e.target.value).format('YYYY-MM-DD')})

        let newTimes = props.timesDispatch({
            type: 'get',
            param: moment(e.target.value).day()
        });

        console.log(newTimes)
    }

    return <>
        <div className="min-w-full px-11 pt-10">
            <form className="" onSubmit={handleSubmit}>
                <div className="label">
                    <label className="label-text" htmlFor="res-date">Choose date</label>
                </div>
                <input className="input input-bordered" type="date" id="res-date" value={form.date} onChange={(e) => { handleDateChange(e) }}  />

                <div className="label">
                    <label htmlFor="res-time">Choose time</label>
                </div>
                <select defaultChecked={form.time} className="select select-bordered" id="res-time " onChange={e => { setForm({...form, time: e.target.value})}}>
                    {props.times.map((time) => {
                        return <option key={time.time} value={time.time}>{time.time}</option>
                    })}
                </select>

                <div className="label">
                    <label className="label-text" htmlFor="guests">Number of Guests</label>
                </div>
                <input className="input input-bordered" type="number" placeholder="1" min={1} max={10} id="guests" value={form.guests} onChange={e => { setForm({...form, guests: e.target.value}) }} />

                <div className="label">
                    <label className="label-text" htmlFor="occasion">Occasion</label>
                </div>
                <select className="select select-bordered" id="occasion" value={form.occasion} onChange={e => { setForm({...form, occasion: e.target.value}) }}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>

                <div className="clear-both"></div>

                <br />
                <button className="btn btn-primary" type="submit" onClick={handleSubmit} >Make Your Reservation</button>
            </form>

        </div>
    </>
}

export default BookingForm;