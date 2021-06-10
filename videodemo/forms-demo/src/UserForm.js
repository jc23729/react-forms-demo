import React, { useState } from "react";

//react will always display the value of whats being show
const UserForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialState)
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();//this will no longer submit or refresh state is preserved
    const { username, email, password } = formData;
    alert(`Created user, ${username} w/ email ${email} & password ${password}`)
    setFormData(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button>Add me to list!</button>
    </form>
  )
}

import React, { useState } from "react";

//react will always display the value of whats being show
// every time you change anything in the button the state gets updated
//we have our piece of state that is being used to set the value of this input

// const UserForm = () => {
//   const [username, setUsername] = useState("ChickenLady");
//   const handleChange = (e) =>{
//    setUsername(e.target.value)
//   }


//   return (
//     <form>
//       <input type="text" placeholder="username" value={username} onChange={handleChange} />
//   <button>Add me to the list</button>
//     </form>
//   )



export default UserForm;