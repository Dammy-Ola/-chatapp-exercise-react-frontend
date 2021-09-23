import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'

const HomePage = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { authUser } = userLogin

  useEffect(() => {
    if (!authUser) {
      history.push('/login')
    }
  }, [history, authUser])

  return (
    <Layout>
      <h1>This is the Home Page</h1>
    </Layout>
  )
}

export default HomePage
