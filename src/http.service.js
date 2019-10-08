import axios from 'axios';

const httpService = axios.create({
  timeout: 120000,
  cancelable: true
});

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

export default httpService;
