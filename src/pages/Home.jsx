import React from 'react'
import CarouselComp from '../components/Home/CarouselComp'
import PartnersSection from '../components/Home/PartnersSection'
import StatisticsSection from '../components/Home/StatisticsSection/StatisticsSection'
import TeacherJoinSection from '../components/Home/TeacherJoinSection'
import StudentTestimonials from '../components/Home/StudentTestimonials'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import FeaturedCourses from '../components/Home/FeaturedCourses'
import { Helmet } from 'react-helmet'

export const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Academix | Home</title>
        </Helmet>
      <CarouselComp/>
      <PartnersSection/>
      <FeaturedCourses/>
      <StatisticsSection/>
      <WhyChooseUs/>
      <TeacherJoinSection/>
      <StudentTestimonials/>


    </div>
  )
}
