import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { register } from '../../redux/actions/authActions'

const RegisterPage = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, authUser } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()

  useEffect(() => {
    if (authUser) {
      toast.success("You've Successfully Register")

      setTimeout(() => {
        history.push('/')
      }, 1000)
    }
  }, [dispatch, history, redirect, authUser])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Password Do Not Match')
    } else {
      dispatch(
        register({
          name,
          email,
          password,
        })
      )
    }
  }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-900'>
      <div className='bg-white p-5 pt-10 w-10/12 lg:w-6/12 rounded-md shadow-2xl'>
        <ToastContainer />
        <h3 className='font-bold text-2xl text-gray-900 mb-3 text-center'>
          Sign Up To Start Chatting
        </h3>
        <form onSubmit={submitHandler} className='p-5'>
          <div className='mb-5'>
            {message && <h5 className='text-red-600'>{message}</h5>}
            {error && <h5 className='text-red-600'>{error}</h5>}
            {loading && <h5>Loading...</h5>}
          </div>

          <div className='mb-5'>
            <label>Full Name</label>
            <input
              type='text'
              name='name'
              placeholder='Your Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-3 mt-1 rounded-md bg-transparent border-2 border-primary'
            />
          </div>
          <div className='mb-5'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-3 mt-1 rounded-md bg-transparent border-2 border-primary'
            />
          </div>
          <div className='mb-5'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 mt-1 rounded-md bg-transparent border-2 border-primary'
            />
          </div>
          <div className='mb-5'>
            <label>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full p-3 mt-1 rounded-md bg-transparent border-2 border-primary'
            />
          </div>
          <div className='mb-5'>
            <input
              type='submit'
              value='Sign Up'
              className='mt-2 bg-gray-900 text-white font-bold text-xl p-3 rounded-md w-full text-center cursor-pointer hover:bg-gray-400'
            />
            <p className='text-center pt-3'>
              Have an Account?
              <Link
                to={redirect ? `/login?redirect=${redirect}` : '/login'}
                className='text-gray-500 pl-2'
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
