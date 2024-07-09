import moment from "moment";
import { useEffect, useState } from "react";

const BookingForm = ( props ) => {
    const [form, setForm] = useState({
        date: '',
        time: '',
        guests: '',
        occassion: '',
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        // do something
        e.preventDefault()
        setLoading(true)

        props.submitForm(form);
    }

    let handleDateChange = (e) => {
        setForm({...form, date: moment(e.target.value).format('YYYY-MM-DD')})

        props.updateTimes(e.target.value)
    }

    useEffect(() => {
        props.date && setForm(prev => ({ ...prev, date: props.date }))
    }, [props.date])

    return <>
        <div className="min-w-full px-11 pt-10">
            <form className="" onSubmit={handleSubmit}>
                <div className="label" htmlFor="res-date">
                    <label className="label-text" htmlFor="res-date">Choose date</label>
                </div>
                <input className="input input-bordered" type="date" id="res-date" value={form.date} onChange={(e) => { handleDateChange(e) }}  />

                <div className="label">
                    <label htmlFor="res-time">Choose time</label>
                </div>
                <select defaultChecked={form.time} className="select select-bordered" id="res-time " name="res-time" onChange={e => { setForm({...form, time: e.target.value})}}>
                    {props.times.map((time) => {
                        return <option key={time.time} value={time.time}>{time.time}</option>
                    })}
                </select>

                <div className="label" htmlFor="guests">
                    <label className="label-text" htmlFor="guests">Number of Guests</label>
                </div>
                <input className="input input-bordered" type="number" placeholder="1" min={1} max={10} id="guests" value={form.guests} onChange={e => { setForm({...form, guests: e.target.value}) }} />

                <div className="label" htmlFor="occasion">
                    <label className="label-text" htmlFor="occasion">Occasion</label>
                </div>
                <select className="select select-bordered" id="occasion" value={form.occasion} onChange={e => { setForm({...form, occasion: e.target.value}) }}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>

                <div className="clear-both"></div>

                <br />
                <button className={"btn btn-primary"} disabled={loading} type="submit" onClick={e => handleSubmit(e)} >Make Your Reservation</button>
            </form>

        </div>
    </>
}

export default BookingForm;