/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'

// const instanse = axios.create({
//   withCredentials: true,
//   baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
// })

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://shopfishsite.onrender.com',
})

export default instanse
