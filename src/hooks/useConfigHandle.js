import { ConfigA, ConfigB } from '@/utils/common.js'
import { computed} from "vue";
export default function () {
	const env = import.meta.env
	const 	brandConfig = computed(() => {
  return env.VITE_BRAND == 'A' ? ConfigA : ConfigB
})
	return {
		brandConfig,
		env
	}
}