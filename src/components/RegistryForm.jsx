import React, { useState } from 'react'

export default function RegistryForm() {
  const [email, setEmail] = useState('')
  const emailHandel = (e) => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState('')
  const passwordHandel = (e) => {
    setPassword(e.target.value)
  }

  const [passwordConfirm, setPasswordConfirm] = useState('')
  const passwordConfirmHandel = (e) => {
    setPasswordConfirm(e.target.value)
  }

  const [errors, setErrors] = useState({})
  const handleSubmitForm = (event) => {
    event.preventDefault()

    let validErrors = {}

    if (!email) {
      validErrors.email = "Email không được để trống"
    }

    if (!password) {
      validErrors.password = "Password không được để trống"
    } else if (password.length < 8) {
      validErrors.password = "Password phải có ít nhất 8 kí tự"
    }

    if (passwordConfirm !== password) {
      validErrors.passwordConfirm = "Password Confirm không khớp với Password"
    }

    setErrors(validErrors)
    console.log(email, password, passwordConfirm)
  }

  return (
    <div>
      <form>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
          <label>Email</label>
          <input type="email" name="email1" onChange={emailHandel} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
          <label>Password</label>
          <input type="password" name="password1" onChange={passwordHandel} />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
          <label>Password</label>
          <input type="passwordConfirm" name="password1" onChange={passwordConfirmHandel} />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <button onClick={handleSubmitForm} style={{ marginTop: "10px" }}>Gửi</button>
      </form>
    </div>
  )
}
