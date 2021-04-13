import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Form.css';

const Datepicker = () => {


    const [date, setDate] = useState({
        startDate: ""
    })

    const handleDate = (date) => {
        setDate({
            startDate: date
        });
    }

    return (
        <div className="datePicker">
            <DatePicker selected={date.startDate} onChange={handleDate} placeholderText="MM/DD/YYYY" className="datePicker__Birthday" />

            <p>BirthDay:{handleDate}</p>

        </div>
    )
}

export default Datepicker;
