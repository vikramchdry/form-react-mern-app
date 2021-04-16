import React from 'react';
import HandleState from "./HandleState";
import validate from "./ValidateInfo";


import "./Form.css";
const FormInfo = () => {

    const { handleChange, values, handleSubmit, errors } = HandleState(validate);
    //console.log(values)


    return (

        <div className="formInfo">
            <form className="form__details" onSubmit={handleSubmit} method="post">
                <h1>Fill Personal Details</h1>
                <div className="formInfo__inputs">
                    <input name="firstname" type="text" className="formInfo__input" placeholder="First Name"
                        value={values.firstname} onChange={handleChange} />
                    {errors.firstname && <p className="form__light">{errors.firstname}</p>}

                </div>
                <div className="formInfo__inputs">
                    <input name="surname" type="text" className="formInfo__input" placeholder="Sur Name"
                        value={values.surname} onChange={handleChange} />
                    {errors.surname && <p className="form__light">{errors.surname}</p>}
                </div>
                <div className="formInfo__inputs">
                    <input name="email" type="email" className="formInfo__input" placeholder="Email"
                        value={values.email} onChange={handleChange} />
                    {errors.email && <p className="form__light"> {errors.email}</p>}
                </div>
                <div className="formInfo__inputs">
                    <input name="dob" type="text" className="formInfo__input" placeholder="MM/DD/YYYY"
                        value={values.dob} onChange={handleChange} />
                </div>


                <div className="formInfo__radioButton">
                    {errors.gender && <p className="form__light"> {errors.gender}</p>}
                    <p>Gender</p>
                    <input type="radio" id="male" name="gender" value="male" onChange={handleChange}
                        className="form__radioOptions" ></input>
                    <label className="form__label">Male</label><br />
                    <input type="radio" id="female" name="gender" value="female" onChange={handleChange}
                        className="form__radioOptions" />

                    <label className="form__label">Female</label><br />
                    <input type="radio" id="other" name="gender" value="Other" onChange={handleChange}
                        className="form__radioOptions" />

                    <label className="form__label">Other</label><br />
                </div>
                <button className="formInfo__button" type="submit">Send Data</button>


            </form>

        </div>
    )
}

export default FormInfo;
