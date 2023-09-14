import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = ({ signup }) => {
  let formRef = useRef()
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // storing the form entries in a variable
    const formData = new FormData(formRef.current)
    // create an object from the entries
    const data = Object.fromEntries(formData)
    // store user's info in format JWT understands
    const userInfo = {
      user: { email: data.email, password: data.password },
    }
    signup(userInfo)
    navigate("/")
    e.target.reset() // resets input fields
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      Email: <input type="email" name="email" placeholder="email" />
      <br />
      Password: <input type="password" name="password" placeholder="password" />
      <br />
      Password Confirmation:{" "}
      <input
        type="password"
        name="password_confirmation"
        placeholder="Confirm 
      password"
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default SignUp
