import { useState } from 'react';
import axios from "axios";
//import concurrently from 'concurrently';
 
const HandleState = (validate) => {


    const [values, setValues] = useState({
        firstname: '',
        surname: '',
        email: '',
        dob: '',
        gender: '',
    });


    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
   // const [data, setData] = useState([])


    const handleChange = e => {


        const { name, value } = e.target;
        //console.log(e)
        setValues({
            ...values,
            [name]: value
        });

    };

    const getData = async () => {
        await axios.get("/api/email-validator.php?email=karol@wp.pl")
            .then(res => {
                if (res.data.status === 200) {
                    alert("data submit suceesfully")
                } else {
                    console.log(res)
                }

                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }
    //getData()

  // useEffect(() => {
     // getData()
      
  // }, [])

    //-----------------loading api-----------


    const handleSubmit = async e => {
        console.log(values)
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);

        if (values.firstname && values.surname && values.email && values.dob && values.gender) {

            await axios.post("http://localhost:5000/user", values)
                .then((res) => {
                    getData()
                    //console.log("Sucessfull send the data");
                }).catch((error) => {   
                    console.log(error)
                });
            setValues({ firstname: '', surname: '', email: '', dob: '', gender: '' })
        }
        //setValues({ firstname: '', surname: '', email: '', dob: '', gender: '' })
        //setValues({ firstname: , surname: values, email: values, dob: values, gender: values })





    }

    return { handleChange, values, handleSubmit, errors, isSubmitting };

}
export default HandleState;
