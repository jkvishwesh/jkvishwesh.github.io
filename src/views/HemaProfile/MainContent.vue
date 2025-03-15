<script setup>
import AboutDeveloper from '@src/subviews/AboutDeveloper.vue'
import DeveloperTitle from '@src/subviews/DeveloperTitle.vue'
import WorkExperience from '@src/subviews/WorkExperience.vue'
import DeveloperEducation from '@src/subviews/DeveloperEducation.vue'
import DeveloperCertifications from '@src/subviews/DeveloperCertifications.vue'

const aboutDevData = {
  developer_aim:
    'To work in a challenging environment that will enhance my skills and knowledge in the state-of-the-art technologies and to be a part of a team that dynamically works towards the growth of the organization.'
}
const subTitle = 'Test Engineer'
const devTitle = 'Hema S J'

const sectionTitle = 'Work Experience'

const experiencesData = [
  {
    exp_details: {
      from: 'Sep 2021',
      to: 'Sep 2024',
      type: 'Full-Time'
    },
    job_title: 'Advisor I',
    job_company: 'Concentrix Daksh Services India Pvt. Ltd.',
    job_location: 'Bengaluru, Karnataka',
    work_description:
      "Handled customer queries related to mortgage processes. I was responsible for providing the best customer service and ensuring that the customer's issues were resolved in a timely manner. Led file allocation for a team of 16 members. Ensured quality assurance and error-free file handling.",
    print_break: false,
    print_margin: false
  }
]

const devEducation = [
  {
    year: '2019-2021',
    institute: 'Indian Institute of Technologies & Management',
    location: 'Bengaluru',
    name: 'Bachelor of Technology in ECE'
  },
  {
    year: '2005-2007',
    institute: 'MNTI',
    location: 'Bengaluru',
    name: 'Diploma in ECE'
  }
]

const devCertificates = [
  {
    year: '2023',
    name: 'Selenium WebDriver - Automation Testing Course',
    institute: 'QSpiders',
    location: 'Bengaluru'
  },
  {
    year: '2023',
    name: 'Manual Testing Fundamentals - Training Program',
    institute: 'QSpiders',
    location: 'Bengaluru'
  }
]
</script>

<template>
  <div class="main__container">
    <DeveloperTitle :title="devTitle" :subtitle="subTitle" :showExperience="false" />
    <AboutDeveloper :content="aboutDevData" />
    <WorkExperience :sectionTitle="sectionTitle" :workExpList="experiencesData" />
    <DeveloperEducation :devEducation="devEducation" sectionTitle="Education" isMainContent />
    <DeveloperCertifications
      :devCertificates="devCertificates"
      sectionTitle="Certifications"
      isMainContent
    />
  </div>
</template>
