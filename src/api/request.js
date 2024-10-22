import { getToken ,removeToken} from '@/utils/auth'
import axios from 'axios'
import { showToast } from 'vant'
import router from '@/router/index'
// console.log(import.meta.env)
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
  timeout: import.meta.env.VITE_TIMEOUT||600000, // request timeout
})

request.interceptors.request.use(
  config => {
    config.headers["token"] = getToken();
    return config
  },
  error => {
    console.error(error) // for debug
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  response => {
		const { status, data, message } = response;
		const { code, msg,body } = data;
		if (status !== 200) {
      showToast(message||msg||'请求失败');
      return Promise.reject(data);
    }
    if ([9999,-1,400].includes(code)) {
			showToast(message || msg || "handle Error");
			if (body.code == 4011) { 
				removeToken()
        router.replace({ path: "/login" });
			}
      return Promise.reject(data);
    }
    if(code === 503){
	    showToast(message||msg || 'token过期')	
			removeToken()
      router.replace({ path: "/login" });
    }
    return data
  },
  error => {
    console.error('响应错误：') // for debug
    console.dir(error)
    const message = (error.response.data && error.response.data.msg) || error.message || '请求失败'
    showToast({
      message: message,
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  },
)

export default request