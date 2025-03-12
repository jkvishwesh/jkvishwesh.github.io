<script setup>
import Sidebar from '@src/views/HemaProfile/SideBar.vue'
import MainContent from '@src/views/HemaProfile/MainContent.vue'
import MasterTemplate from '@src/subviews/MasterTemplate.vue'
import DeveloperPicture from '@src/subviews/DeveloperPicture.vue'
import HemaSj from '@assets/images/Wify-logo.png'
</script>

<template>
  <MasterTemplate class="hema__profile">
    <template #sidebar>
      <DeveloperPicture :hasTriangle="true" :imageName="HemaSj" :width="devPicWidth" />
      <Sidebar />
    </template>
    <template #content>
      <MainContent />
    </template>
  </MasterTemplate>
</template>

<style>
.hema__profile {
  text-align: left;
}
</style>
