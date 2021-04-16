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
     //   await axios.get("https://extensi.io/api/email-validator.php?email=karol@wp.pl")
        //    .then(res => res.json())
        //    .then(receivedData => setData(receivedData))

 //   }
  //  console.log(data)


 //   useEffect(() => {
  //      getData();
  //  }, []);



    const handleSubmit = e => {
        //console.log()
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);

        if (values.firstname && values.surname && values.email && values.dob && values.gender) {

            axios.post("/user", values)
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
