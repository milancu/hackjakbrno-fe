import Axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import jsCookie from "js-cookie";

const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
  withXSRFToken: true,
});
//
// const refreshAuthLogic = () => {
//   return axiosInstance.get("/sanctum/csrf-cookie");
// };
//
// createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {
//   statusCodes: [419],
// });
//
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const csrfToken = jsCookie.get("XSRF-TOKEN");
//     console.log(jsCookie.get());
//     if (csrfToken) {
//       config.headers["X-XSRF-Token"] = csrfToken;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
