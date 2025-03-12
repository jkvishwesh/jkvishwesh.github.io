<script setup>
import DeveloperSkills from '@src/subviews/DeveloperSkills.vue'
import DeveloperContact from '@src/subviews/DeveloperContact.vue'
import DeveloperEducation from '@src/subviews/DeveloperEducation.vue'
import DeveloperSocials from '@src/subviews/DeveloperSocials.vue'
import DeveloperHobbies from '@src/subviews/DeveloperHobbies.vue'

const devSkills = [
  'Selenium',
  'JUnit',
  'TestNG',
  'Java',
  'Python',
  'SQL',
  'Manual & Automation Testing'
]

const devContact = [
  {
    iName: 'mobile',
    iValue: '+91-9739437179',
    iconName: 'cellphone'
  },
  {
    iName: 'email',
    iValue: 'hemavish0@outlook.com',
    iconName: 'email'
  },
  {
    iName: 'location',
    iValue: 'Bengaluru, Karnataka',
    iconName: 'location'
  }
]

const devSocials = [
  {
    iName: 'LinkedIn',
    iValue: 'https://www.linkedin.com/in/hema-s-j-525370167/',
    iconName: 'lkdin-round'
  }
]

const devEducation = [
  {
    year: '2019-2021',
    institute: 'Sri Venkateshwara College of Engineering',
    location: 'Bengaluru',
    name: 'Bachelor of Engineering in Computer Science'
  },
  {
    year: '2005-2006',
    institute: 'Sangolli Rayanna MR School',
    location: 'Nandagad',
    name: 'Secondary School'
  }
]

const devHobbies = [
  { iName: 'Gaming', iValue: 'gaming', iconName: 'gaming' },
  { iName: 'Cinema', iValue: 'cinema', iconName: 'cinema-round' },
  { iName: 'Music', iValue: 'music', iconName: 'music' },
  { iName: 'Travelling', iValue: 'travelling', iconName: 'holidays-travel' },
  { iName: 'Exercise', iValue: 'exercise', iconName: 'exercise' },
  { iName: 'Browsing', iValue: 'browsing', iconName: 'website' }
]
</script>

<template>
  <div class="sidebar__container">
    <DeveloperContact :devContact="devContact" sectionTitle="Contact" />
    <DeveloperSocials :devSocials="devSocials" sectionTitle="Social Media" />
    <DeveloperSkills :devSkills="devSkills" sectionTitle="Skills" />
    <DeveloperEducation :devEducation="devEducation" sectionTitle="Education" />
    <DeveloperHobbies :devHobbies="devHobbies" sectionTitle="Hobbies" />
  </div>
</template>
