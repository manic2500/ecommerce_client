import type { Product } from '@/types/product';
import axiosClient from './axiosClient';


const baseURL: string = '/products'

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axiosClient.get(baseURL);
    return response.data;
};

export const fetchLatestProducts = async (): Promise<Product[]> => {
    const response = await axiosClient.get(baseURL + '/latest');
    return response.data;
};
