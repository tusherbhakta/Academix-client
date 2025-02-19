import React from 'react'
import CarouselComp from '../components/Home/CarouselComp'
import PartnersSection from '../components/Home/PartnersSection'
import StatisticsSection from '../components/Home/StatisticsSection/StatisticsSection'
import TeacherJoinSection from '../components/Home/TeacherJoinSection'
import StudentTestimonials from '../components/Home/StudentTestimonials'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import FeaturedCourses from '../components/Home/FeaturedCourses'
import Newsletter from '../components/Home/Newsletter'
import { Helmet } from 'react-helmet'
import SuccessStories from '../components/Home/SuccessStory'

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
      <SuccessStories/>
      <WhyChooseUs/>
      <TeacherJoinSection/>
      <StudentTestimonials/>
      {/* <Newsletter/> */}


    </div>
  )
}
