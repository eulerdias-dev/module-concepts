import { AxiosInstance } from 'axios';

declare module 'vue/types/vue' {
    interface Vue {
      $http: AxiosInstance;
      $gtm: any;
      $dialogLoader: any;
    }
}