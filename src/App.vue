<script setup>
console.log(import.meta.env)
</script>
<template>
	<router-view>	</router-view>
  <!-- <router-view>
    <template #="{ Component, route }">
      <keep-alive v-if="route.meta.keepAlive">
        <component
          :is="Component"
          :key="route.path"
        />
      </keep-alive>
      <component
        v-else
        :is="Component"
        :key="route.path"
      />
    </template>
  </router-view> -->
</template>

<style scoped>

</style>
