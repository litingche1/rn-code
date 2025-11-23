import axios from 'axios';
import { useStore } from '../store/useStore';

// 示例 API 地址
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
api.interceptors.request.use(
  async (config) => {
    // 从 Zustand Store 中获取 Token
    const token = useStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 统一错误处理
    if (error.response) {
      console.error('[API Error]', error.response.status, error.response.data);
    } else {
      console.error('[API Error]', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;

