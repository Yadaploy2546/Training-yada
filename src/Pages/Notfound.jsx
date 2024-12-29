import React from 'react'
import Layout from '../Template/Layout'
import {NavLink} from 'react-router-dom'

const NotFound = () => {
  return (
    <Layout>
        <h1 className="text-center font-bold text-5xl">ไม่พบหน้าที่ต้องการ</h1>
        <p className="text-center">กรุณาลองใหม่อีกครั้ง</p>
        <li>
            <NavLink to="/">หน้าหลัก</NavLink>
          </li>
    </Layout>
  )
}

export default NotFound