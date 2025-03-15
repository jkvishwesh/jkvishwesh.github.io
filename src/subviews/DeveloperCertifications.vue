<script setup>
import MasterIcon from '@components/MasterIcon.vue'
import MasterHrLine from '@components/MasterHrLine.vue'

const props = defineProps({
  devCertificates: {
    default: () => [],
    type: Array
  },
  sectionTitle: {
    default: '',
    type: String
  },
  isMainContent: {
    default: false,
    type: Boolean
  }
})

const iconColor = props.isMainContent ? 'var(--primary-icon)' : 'var(--secondary-icon)'
const iconHoverColor = props.isMainContent ? 'var(--themed-icon)' : 'var(--themed-icon)'
const hrColor = props.isMainContent ? 'var(--glob-dark)' : 'var(--glob-light)'

const certificationsClass = props.isMainContent
  ? 'certifications_details certifications_main'
  : 'certifications_details certifications_sidebar'

const instituteClass = props.isMainContent
  ? 'strong x-medium-text normal'
  : 'strong x-small-text italic'
</script>

<template>
  <div class="personal_details dev_certifications">
    <div class="flex-between">
      <h3 class="section_title">{{ sectionTitle }}</h3>
      <MasterIcon
        svgName="degree"
        size="medium"
        :fillColor="iconColor"
        :hoverColor="iconHoverColor"
      />
    </div>
    <MasterHrLine thickness="1px" :hrColor="hrColor" />
    <div class="certifications_line" v-for="(line, i) in devCertificates" :key="i">
      <div :class="certificationsClass">
        <div class="strong certification_name">{{ line.name }}</div>
        <div class="institute_details">
          <div :class="`${instituteClass} institute_name`">
            <MasterIcon
              svgName="school-college"
              size="x-small"
              :fillColor="iconColor"
              :hoverColor="iconHoverColor"
            />
            {{ line.institute }}
          </div>
          <div :class="`${instituteClass} institute_location`">
            <MasterIcon
              svgName="location"
              size="x-small"
              :fillColor="iconColor"
              :hoverColor="iconHoverColor"
            />
            {{ line.location }}
          </div>
        </div>
      </div>
      <MasterHrLine thickness="1px" :hrColor="hrColor" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dev_certifications .certifications_line {
  padding-left: px2rem(5);

  .certification_name {
    margin-bottom: px2rem(10);
  }

  .institute_location,
  .institute_name {
    display: flex;
    gap: px2rem(10);
    margin-bottom: px2rem(5);
  }
  .passed_year {
    display: block;

    .year {
      display: inline-flex;
      gap: px2rem(10);
      align-items: baseline;
      justify-content: flex-start;
    }
  }
}
</style>
