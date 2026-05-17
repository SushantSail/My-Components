import React, { useState } from "react";
import "./style.css";

export default function Pass_Strength() {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState('')
  const [hidePass, setHidePass] = useState(true);

  function validation(pass) {
    let score = 0
    if (pass.length >= 8) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^a-zA-Z0-9\d]/.test(pass)) score++;

    switch (score) {
      case 0:
      case 1:
      case 2:
        return 'Weak';
      case 3:
        return 'Moderate';
      case 4:
        return 'Strong'
      case 5:
        return 'Excellent';
      default:
        return '';
    }
  }

  function handleChange(e) {
    setPassword(e.target.value);
    setStrength(validation(password));
  }
  return (
    <div>
      <input type={hidePass ? 'password' : 'texts'}
        value={password}
        onChange={handleChange} />
      <button onClick={() => setHidePass(!hidePass)}>{hidePass ? 'Show' : 'Hide'}</button>
      <p>Password Strength :
       <strong> {strength} </strong>
         </p>
    </div>
  );
}
