import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import User from './components/User';

const App = () => {

  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  // optimized approach

  const [formData, setFormData] = useState({
    fullName: '',
    email:'',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const [users, setUsers] =  useState([]);

  const  handleChanges = (e) => {
      const {name, value} = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
  }



  const submitHandler = (e) => {  
    e.preventDefault();
    console.log('Form Submitted');

    if(formData.password.length < 8) {
      setError('Password should be atleast 8 characters');
      return;
    }

    if(formData.password !== formData.confirmPassword) {
      setError('Password and confirm password should be same');
      return;
    }

    if(!/[!@#$%^&*()<>,."]/.test(formData.password)) {
      setError('Password should contain atleast one special character');
      return;
    }

    if(!/[A-Z]/.test(formData.password)) {
      setError('Password should contain atleast one uppercase letter');
      return;
    }

    // setUsers([...users, formData]);

    setUsers((prevUsers) => [
      ...prevUsers, {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        
      }
    ])

    // console.log(users);
    

    // setError('');
    // setFullName('');
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');

    setError('');

    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

    toast.success("Login Successfull!✅", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
    });
    
  }

  return (
    <>
      <div className="flex  items-center justify-center  h-screen">
        <div className="bg-white p-6 rounded-lg shadow-2xl w-96">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            Create an account
          </h2>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center gap-4"
          >
            <input
              value={formData.fullName}
              onChange={handleChanges}
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500"
              type="text"
              name='fullName'
              required
              placeholder="Enter Name here"
            />
            <input
              value={formData.email}
              onChange={handleChanges}
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500"
              type="email"
              name='email'
              required
              placeholder="Enter email "
            />
            <input
              value={formData.password}
              onChange={handleChanges}
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500"
              type="password"
              name='password'
              required
              placeholder="Enter password"
            />
            <input
              value={formData.confirmPassword}
              onChange={handleChanges}
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500"
              type="password"
              name='confirmPassword'
              required
              placeholder="Confirm password"
            />

            {error && (
              <p className='text-red-600 text-sm text-center font-medium'>{error}</p>
            )}
            <button
              className="text-md px-4 py-2 rounded bg-indigo-700 font-semibold w-full mt-5 text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-600 mt-4 text-center">
            By registering, you agree to our{" "}
            <span className="text-indigo-600">Terms & Conditions</span> and{" "}
            <span className="text-indigo-600">Privacy Policy</span>
          </p>
        </div>
        <ToastContainer>

        </ToastContainer>
      </div>

      <User users={users}/>
    </>
  ); 
}

export default App


