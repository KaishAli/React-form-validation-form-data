import '../component/LoginForm.css';
import { useState } from "react";
import HomePage from '../../src/Landing/HomePage'
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
function LoginForm() {
  const [alert, Setalert] = useState(false)
  const [data, setData] = useState({
    type1: "",
    type2: "",
    type3: "",
    type4: ""
  }
  )
  const handleChnge = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  }

  const handleClick = () => {
    console.log(data);
    if (data.type1 && data.type2 && data.type3 && data.type4) {
      window.location.href = "/HomePage"
    } else {
      Setalert(true);
      CloseAlert();
    }
  };

  function CloseAlert() {
    setTimeout(() => {
      Setalert(false);
    }, 5000);
  }
  return (
    <>
      {alert &&
        <Stack sx={{
          width: "50%",
          margin: "auto",
        }} spacing={2}>
          <Alert severity="error"> Please Enter Valid Credential</Alert>
        </Stack>
      }

      <div className='form'>
        <h5>Registration</h5>

        <input
          value={data.type1}
          type="text"
          placeholder='Enter Your Name'
          onChange={handleChnge}
          name="type1"
          className="form-input"
        />

        <input
          name="type2"
          value={data.type2}
          type="text"
          placeholder='Enter Your Age'
          onChange={handleChnge}
          className="form-input"
        />

        <input
          name="type3"
          value={data.type3}
          type="text"
          placeholder='Enter Your Email'
          onChange={handleChnge}
          className="form-input"
        />

        <input
          name="type4"
          value={data.type4}
          type="text"
          placeholder='Enter Your Contact No.'
          onChange={handleChnge}
          className="form-input"
        />

        <button onClick={handleClick} className="form-button">Submit</button>
      </div>


    </>


  );
}

export default LoginForm;
