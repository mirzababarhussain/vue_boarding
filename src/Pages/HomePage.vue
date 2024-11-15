<script setup>
    import Hero from '@/components/Hero.vue';
  import HomeCards from '@/components/HomeCards.vue';
  import JobListing from '@/components/JobListing.vue';
</script>

<template>
     <Hero title="A1-Jobians"/>
  <HomeCards/>
  <JobListing :limit="3" :showButton="true"/>
</template>