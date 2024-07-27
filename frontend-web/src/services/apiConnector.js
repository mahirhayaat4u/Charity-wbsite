import axios from "axios";
// console.log("in api connector")
export const axiosInstance =axios.create({
    baseURL: "http://localhost:4000",
});
console.log("in api connector")

export const apiConnector=(method,url,bodyData,headers,params)=>{
  //  console.log("inside api connector")
  return axiosInstance({
      method:`${method}`,
      url:`${url}`,
      data:bodyData ? bodyData:null ,
      headers: headers ? headers:null,
      params:params?params:null,
  });

  
}

