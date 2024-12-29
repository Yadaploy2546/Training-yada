import React from 'react'
import Layout from '../Template/Layout'
import CourseCard from '../Components/CourseCard'

const Course = () => {
  return (
    <Layout>
      <h1 className="text-5xl font-bold mb-6">หลักสูตรที่เปิดสอน</h1>
      <hr />
      <div className="mt-4">
        <CourseCard name="Basic React Native" duration="5 day" price={7500} />
        <CourseCard name="Power BI Dashboard" duration="4 day" price={5500} />
        <CourseCard name="UI Design with Figma" duration="3 day" price={5000} />
        <CourseCard name="Cross Platform with Flutter" duration="5 day" price={6500} />
      </div>
    </Layout>
  )
}

export default Course