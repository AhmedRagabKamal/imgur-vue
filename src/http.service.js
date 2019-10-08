import axios from 'axios';
import axiosCancel from 'axios-cancel';

const httpService = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  headers: { Authorization: 'Client-ID b6d1641389367c5' },
  timeout: 120000,
  cancelable: true
});

axiosCancel(httpService);

let getRequestCounter = 0;

export function handleGetRequestLoading($progress) {
  httpService.interceptors.request.use(
    config => {
      getRequestCounter++;
      $progress();
      return config;
    },
    error => Promise.reject(error)
  );
}

export function handleGetResponseLoading($progress) {
  httpService.interceptors.response.use(
    response => {
      getRequestCounter--;
      if (getRequestCounter <= 0) {
        $progress();
      }
      return response;
    },
    error => {
      getRequestCounter--;
      if (getRequestCounter <= 0) {
        $progress();
      }
      return Promise.reject(error);
    }
  );
}

httpService.interceptors.request.use(
  config => {
    const endpointUrl = `${config.url.split('?')[0]}:${config.method}`;
    httpService.cancel(endpointUrl);
    if (config.cancelable) config.requestId = endpointUrl;
    return config;
  },
  error => Promise.reject(error)
);

export default httpService;
