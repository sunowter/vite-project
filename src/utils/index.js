export function rmJsonStorage(key) {
  if (!key) throw "Key is undefined";
  localStorage.removeItem(key);
}

export function getStorage(key) {
  if (!key) throw "Key is undefined";
  return localStorage.getItem(key);
}

export function setStorage(key, value) {
  if (!key || !value) throw "Key or Value is undefined";
  return localStorage.setItem(key, value);
}

export const require = (imgPath) => {
	const modules = import.meta.glob('/src/assets/imgs/*/*', {eager: true})  
	const path = `/src/assets/imgs/${imgPath}` // 这里不可以写路径别名，只可以写绝对或者相对路已经
	return modules[path]?.default
}  
 export const getRandomValue = (arr) => {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
export const searchKeys=(val, keywords)=> {
  let list = keywords && keywords.split(' ') || {}
  val = val + ''
  if (list.length) {
    list.map(keyword => {
      let words=val.match(new RegExp(keyword, 'ig'))
      if (words&&words[0]&&val.indexOf(words[0]) !== -1) {
        val = val.replace(words, '<font color="red">' + words + '</font>')
      } else {
          return val
      }
    })
  }
  return val
}