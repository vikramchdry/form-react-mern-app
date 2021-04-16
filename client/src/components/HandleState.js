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
    //   const [data, setData] = useState([])


    const handleChange = e => {


        const { name, value } = e.target;
        //console.log(e)
        setValues({
            ...values,
            [name]: value
        });

    };

    //const api = "https://extensi.io/api/email-validator.php?email=karol@wp.pl";
   // const getData = async () => {
   //   await axios.get("/api/email-validator.php?email=karol@wp.pl")
   //    .then(res => console.log(res))
       //.then(receivedData => setData(receivedData))

  //    }
  //    getData()
     //console.log(data)


    //   useEffect(() => {
    //      getData();
    //  }, []);



    const handleSubmit = async e => {
        //console.log()
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);

        if (values.firstname && values.surname && values.email && values.dob && values.gender) {

            await axios("http://localhost:5000/user", values)
                .then((res) => {
                    console.log("Sucessfull send the data");
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
