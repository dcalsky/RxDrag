import { AxiosRequestConfig } from "axios"

const API_POST_LOGIN : AxiosRequestConfig= {
  url:'/api/login',
  method:'post',
}

const API_GET_APP_INFO : AxiosRequestConfig= {
  url:'/api/get-app-info',
  method:'get',
}

const API_SET_ENGRY_MODULE_ID : AxiosRequestConfig= {
  url:'/api/set-entry-module-id',
  method:'post',
}


export { 
  API_POST_LOGIN,
  API_GET_APP_INFO, 
  API_SET_ENGRY_MODULE_ID
}