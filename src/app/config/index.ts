type collection = 'planets' | 'stations' | 'cargoes';

type IApiConfig = {
  [param in collection]: string;
}

export const ApiConfig: IApiConfig & {[param: string]: string} = {
  planets: '/planets',
  stations: '/stations',
  cargoes: '/cargoes',
  baseUrl: 'http://localhost:8080'
};
