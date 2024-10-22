const modules = import.meta.glob('/src/assets/imgs/*/*', {eager: true})  
const mixins = {
	useStaticImgUrl: (imgPath) => {
		const path = `/src/assets/imgs/${imgPath}` // 这里不可以写路径别名，只可以写绝对或者相对路已经
		return modules[path]?.default
	}
}
export default mixins;