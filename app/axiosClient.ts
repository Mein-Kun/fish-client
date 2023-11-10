/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'

// const instance = axios.create({
//   withCredentials: true,
//   baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
// })

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000',
})

export default instanse
