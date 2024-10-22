import request from "@/api/request.js";
export const login = (data) => { 
    return request({
			url: `/api/login`,
			method: "post",
      data

    })
}