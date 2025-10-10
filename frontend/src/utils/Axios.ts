import axios from 'axios';
import { toast } from 'react-toastify';

// Base URL do backend configurada via variável de ambiente
// Use NEXT_PUBLIC_API_URL so the variable is available in the browser build.
export const axiosPublic = axios.create({
  baseURL: (process.env.NEXT_PUBLIC_API_URL as string) || 'http://localhost:9832',
});

// Instância privada que requer o token
export const axiosPrivate = axios.create({
  baseURL: (process.env.NEXT_PUBLIC_API_URL as string) || 'http://localhost:9832',
  withCredentials: true,
});

// Interceptor para adicionar o token nas requisições privadas
axiosPrivate.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("JwtToken");
    if (token) {

      const expiry = JSON.parse(atob(token.split('.')[1])).exp;
      const isExpired = Date.now() >= expiry * 1000;

      if (isExpired) {
        localStorage.removeItem("JwtToken");
        window.location.href = "/login";
      } else {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    toast.error(`Erro no request private: ${error.message}`);
    return Promise.reject(error);
  }
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(`Erro na response private: ${error.message}`);
    if (error.response?.status === 401) {
      localStorage.removeItem("JwtToken");
      window.location.href = "/login";
      toast.error("Sessão expirada. Por favor, faça login novamente.");
    }
    return Promise.reject(error);
  }
);

// Interceptors para axiosPublic
axiosPublic.interceptors.request.use(
  (config) => config,
  (error) => {
    toast.error(`Erro no request public: ${error.message}`);
    return Promise.reject(error);
  }
);

axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(`Erro na response public: ${error.message}`);
    return Promise.reject(error);
  }
);
