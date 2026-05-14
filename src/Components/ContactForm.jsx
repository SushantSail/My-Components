import React ,{useState} from "react";
import "./style.css";
import Validate from './Validate';

export default function ContactForm() {

  const [email , setEmail] = useState('');
  const [ password , setPassword] = useState('');
  const [ mobile , setMobile]  = useState(null);
  const [ country , setCountry]  = useState(''); 
  const [err, setErr] = useState(null); 

function handleSubmit(e){
  e.preventDefault();
  const result = Validate(email, password, mobile);

  if (result ) {
    alert("Form Submitted Successfully");
    setErr("");
  } else {
    setErr(result);
  }
}
 
  // Mobile number max length = 10
  function handleMobile(e) {
    const value = e.target.value;

    // Allow only 10 digits
    if (value.length <= 10) {
      setMobile(value);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Username' value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input type="text" placeholder='Password' value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        <br /><br />
        <select name="countryCode" value={country}
          onChange={(e) => setCountry(e.target.value)}>
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+75">+75</option>
        </select>
        <input type="number" placeholder='Mobile Number' value={mobile}
          onChange={handleMobile}/>
        <br /><br />
        <button type='submit'>Send </button>
      </form>

      {err && (
        <div style={{ color: "red", marginTop: "10px" }}>
          {err}
        </div>
      )}
      
    </div>
   
  );
}


// Validate Function

export default function Validate(email, password, mobile) {


  // Password validations
  const lower = /[a-z]/.test(password);
  const upper = /[A-Z]/.test(password);
  const digit = /[0-9]/.test(password);
  const symbol = /[^a-zA-Z0-9]/.test(password);

  if (!lower) {
    return "Password must contain lowercase letter";
  }

  if (!upper) {
    return "Password must contain uppercase letter";
  }

  if (!digit) {
    return "Password must contain digit";
  }

  if (!symbol) {
    return "Password must contain symbol";
  }

  // Mobile validation
  if (mobile.length !== 10) {
    return "Mobile number must be 10 digits";
  }

  return true;
}