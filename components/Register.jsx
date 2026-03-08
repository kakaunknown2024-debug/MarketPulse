// import React, { useState } from "react";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     district: "",
//     state : "",
//     mobile: "",
//     userType: "Farmer",
//   });

//   // handle input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // submit form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", formData);
//     alert("Login Submitted!");
//   };

//   const handleForgotPassword = () => {
//     alert("Redirect to Forgot Password Page");
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.form} onSubmit={handleSubmit}>
//         <h2 style={styles.title}>🌾 Smart Agriculture Register</h2>

//         {/* Username */}
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />

//           <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />

//         {/* Password */}
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />
       
         
//           <select
//           name="state"
//           value={formData.state}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         >
//           <option value="">Select State</option>
//           <option value="Andhra Pradesh">Andhra Pradesh</option>
//           <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//           <option value="Assam">Assam</option>
//           <option value="Bihar">Bihar</option>
//           <option value="Chhattisgarh">Chhattisgarh</option>
//           <option value="Goa">Goa</option>
//           <option value="Gujarat">Gujarat</option>
//           <option value="Haryana">Haryana</option>
//           <option value="Himachal Pradesh">Himachal Pradesh</option>
//           <option value="Jharkhand">Jharkhand</option>
//           <option value="Karnataka">Karnataka</option>
//           <option value="Kerala">Kerala</option>
//           <option value="Madhya Pradesh">Madhya Pradesh</option>
//           <option value="Maharashtra">Maharashtra</option>
//           <option value="Manipur">Manipur</option>
//           <option value="Meghalaya">Meghalaya</option>
//           <option value="Mizoram">Mizoram</option>
//           <option value="Nagaland">Nagaland</option>
//           <option value="Odisha">Odisha</option>
//           <option value="Punjab">Punjab</option>
//           <option value="Rajasthan">Rajasthan</option>
//           <option value="Sikkim">Sikkim</option>
//           <option value="Tamil Nadu">Tamil Nadu</option>
//           <option value="Telangana">Telangana</option>
//           <option value="Tripura">Tripura</option>
//           <option value="Uttar Pradesh">Uttar Pradesh</option>
//           <option value="Uttarakhand">Uttarakhand</option>
//           <option value="West Bengal">West Bengal</option>

//           <option value="Andaman and Nicobar Islands">
//             Andaman and Nicobar Islands
//           </option>
//           <option value="Chandigarh">Chandigarh</option>
//           <option value="Dadra and Nagar Haveli and Daman and Diu">
//             Dadra and Nagar Haveli and Daman and Diu
//           </option>
//           <option value="Delhi">Delhi</option>
//           <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//           <option value="Ladakh">Ladakh</option>
//           <option value="Lakshadweep">Lakshadweep</option>
//           <option value="Puducherry">Puducherry</option>
//         </select>


//          {/* District */}
//         <input
//           type="text"
//           name="district"
//           placeholder="District"
//           value={formData.district}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />

//           <input
//           type="tel"
//           name="mobile"
//           placeholder="Mobile Number"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//           style={styles.input}
//         />



//     <div style={styles.userTypeContainer}>
//   <label><b>Select User Type</b></label>

//   <div style={styles.radioGroup}>
//     <label style={styles.radioLabel}>
//       <input type="radio" name="userType" value="Farmer"
//         checked={formData.userType === "Farmer"}
//         onChange={handleChange}/> Farmer
//     </label>

//     <label style={styles.radioLabel}>
//       <input type="radio" name="userType" value="Customer"
//         checked={formData.userType === "Customer"}
//         onChange={handleChange}/> Customer
//     </label>

//     <label style={styles.radioLabel}>
//       <input type="radio" name="userType" value="Admin"
//         checked={formData.userType === "Admin"}
//         onChange={handleChange}/> Admin
//     </label>
//   </div>
// </div>

//         {/* Buttons */}
//         <button type="submit" style={styles.submitBtn}>
//           Submit
//         </button>

//         <button
//           type="button"
//           onClick={handleForgotPassword}
//           style={styles.forgotBtn}
//         >
//           Forgot Password
//         </button>
//       </form>
//     </div>
//   );
// };
          
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    district: "",
    state: "",
    mobile: "",
    userType: "Farmer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    alert("Register Submitted!");
  };

  const handleForgotPassword = () => {
    alert("Redirect to Forgot Password Page");
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>🌾 Smart Agriculture Register</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        {/* State Dropdown */}
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select State</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>

          <option value="Andaman and Nicobar Islands">
            Andaman and Nicobar Islands
          </option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Dadra and Nagar Haveli and Daman and Diu">
            Dadra and Nagar Haveli and Daman and Diu
          </option>
          <option value="Delhi">Delhi</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Ladakh">Ladakh</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Puducherry">Puducherry</option>
        </select>

        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <div style={styles.userTypeContainer}>
          <label><b>Select User Type</b></label>

          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="userType"
                value="Farmer"
                checked={formData.userType === "Farmer"}
                onChange={handleChange}
              /> Farmer
            </label>

            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="userType"
                value="Customer"
                checked={formData.userType === "Customer"}
                onChange={handleChange}
              /> Customer
            </label>

            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="userType"
                value="Admin"
                checked={formData.userType === "Admin"}
                onChange={handleChange}
              /> Admin
            </label>
          </div>
        </div>

        <button type="submit" style={styles.submitBtn}>
          Submit
        </button>

        <button
          type="button"
          onClick={handleForgotPassword}
          style={styles.forgotBtn}
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
};



  



const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  },

  form: {
    background: "rgba(255,255,255,0.95)",
    padding: "40px",
    borderRadius: "15px",
    width: "380px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#203a43",
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    transition: "0.3s",
  },

  userTypeContainer: {
    marginTop: "10px",
    marginBottom: "20px",
  },

  radioGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "8px",
  },

  radioLabel: {
    padding: "8px 12px",
    borderRadius: "20px",
    border: "1px solid #2c5364",
    cursor: "pointer",
    fontSize: "14px",
  },

  submitBtn: {
    width: "100%",
    padding: "12px",
    // background: "linear-gradient(135deg, #11998e, #38ef7d)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
    transition: "0.3s",
  },

  forgotBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Register;
