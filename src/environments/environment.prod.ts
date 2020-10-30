import { HttpEndpoints } from './http-endpoints/http-endpoints.prod';

export const environment = {
  production: true,
  HttpEndpoints: new HttpEndpoints(),
};
