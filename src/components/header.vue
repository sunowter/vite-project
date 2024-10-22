<template>
  <div class="back-container">
    <slot>
      <van-icon
        v-if="showBack"
        name="arrow-left"
        class="back-icon"
        color="#A8ABAE"
        size='18px'
        @click="goBack"
      />
			<div class="back-text">{{title}}</div>
    </slot>
  </div>
</template>
 
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
  title: {
    type: String,
  },
  type: {
    type: String,
	},
	showBack: {
		type: Boolean,	
		default: true
	}
})
const goBack = () => {
  router.go(-1)
}
</script>
 
<style lang="scss" scoped>
.back-container {
  width: 100%;
  height: 45px;
	line-height: 45px;
  position: relative;
  .back-icon {
    position: absolute;
    left: 11px;
    top: 13px;
  }
  .back-text {
    width: 100%;
    text-align: center;
    color: #3d3d3d;
    font-size: 16px;
  }
}
</style>