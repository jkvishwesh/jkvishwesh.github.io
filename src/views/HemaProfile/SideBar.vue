<script setup>
import DeveloperSkills from '@src/subviews/DeveloperSkills.vue'
import DeveloperContact from '@src/subviews/DeveloperContact.vue'
import DeveloperSocials from '@src/subviews/DeveloperSocials.vue'
import DeveloperHobbies from '@src/subviews/DeveloperHobbies.vue'

const devSkills = [
  'SDLC & STLC',
  'Manual & Automation Testing',
  'SoapUI',
  'Postman',
  'Java',
  'API testing',
  'Jenkins',
  'JIRA',
  'SQL',
  'TestNG',
  'Git',
  'Test Plan & Test Case Creation',
  'Test Execution & Reporting',
  'Defect Tracking & Reporting',
  'Agile Methodologies'
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
    iValue: 'www.linkedin.com/in/hemavish',
    iconName: 'lkdin-round'
  },
  {
    iName: 'Instagram',
    iValue: 'https://www.instagram.com/hemavish_6518',
    iconName: 'insta-round'
  },
  {
    iName: 'Facebook',
    iValue: 'https://www.facebook.com/profile.php?id=100015237851350',
    iconName: 'fb-round'
  }
]

const devHobbies = [
  { iName: 'Dancing', iValue: 'dancing', iconName: 'dancing' },
  { iName: 'Cooking', iValue: 'cooking', iconName: 'cooking' },
  { iName: 'Cinema', iValue: 'cinema', iconName: 'cinema-round' },
  { iName: 'Music', iValue: 'music', iconName: 'music' },
  { iName: 'Travelling', iValue: 'travelling', iconName: 'holidays-travel' },
  { iName: 'Exercise', iValue: 'exercise', iconName: 'exercise' }
]
</script>

<template>
  <div class="sidebar__container">
    <DeveloperContact :devContact="devContact" sectionTitle="Contact" />
    <DeveloperSocials :devSocials="devSocials" sectionTitle="Social Media" />
    <DeveloperSkills :devSkills="devSkills" sectionTitle="Skills" />
    <DeveloperHobbies :devHobbies="devHobbies" sectionTitle="Hobbies" />
  </div>
</template>
