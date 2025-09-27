import axios from "axios";
interface Params {
  brand: string;
  rentalPrice: string;
  minMileage: string;
  maxMileage: string;
  page: number;
  limit: string;
}
export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
}
export interface CarsResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
}
axios.defaults.baseURL = "https://car-rental-api.goit.global";
export async function fetchBrands() {
  const resp = await axios.get<string[]>(`/brands`);
  return resp.data;
}

export async function fetchCars(params?: Params): Promise<CarsResponse> {
  const resp = await axios.get<CarsResponse>(`/cars`, { params });
  return resp.data;
}
export async function fetchCarById(id: string): Promise<Car> {
  const resp = await axios.get<Car>(`/cars/${id}`);
  return resp.data;
}
