<script setup>
import AboutDeveloper from '@src/subviews/AboutDeveloper.vue'
import DeveloperTitle from '@src/subviews/DeveloperTitle.vue'
import WorkExperience from '@src/subviews/WorkExperience.vue'

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
      from: 'Oct 2021',
      to: 'Present',
      type: 'Full-Time'
    },
    job_title: 'Sr. Associate',
    job_company: 'J P Morgan Chase & Co.',
    job_location: 'Bengaluru, Karnataka',
    work_description:
      "Working on a Design system project that solves and minimizes design issues throughout the firm. I'm also responsible to mentor junior developers and interns.",
    print_break: false,
    print_margin: false,
    projects_list: [
      {
        project_name: 'Tuxedo Design System',
        project_description:
          "It's a Design system project that solves and minimizes design issues throughout the firm.",
        work_skills: [
          'ReactJS',
          'VueJs',
          'JavaScript',
          'TypeScript',
          'HTML5',
          'CSS3',
          'Spring Boot',
          'NodeJS'
        ],
        project_link: 'internal',
        isProject: true
      }
    ]
  }
]
</script>

<template>
  <div class="main__container">
    <DeveloperTitle :title="devTitle" :subtitle="subTitle" :showExperience="false" />
    <AboutDeveloper :content="aboutDevData" />
    <WorkExperience :sectionTitle="sectionTitle" :workExpList="experiencesData" />
  </div>
</template>
