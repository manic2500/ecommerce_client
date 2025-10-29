import { useState, useEffect } from 'react';
import { fetchProducts } from '@/api/productService';
import type { Product } from '@/types/product';


const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err: any) {
                setError(err.message || 'An error occurred while fetching products.');
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []); // Empty dependency array means this effect runs only once, on mount

    return { products, loading, error };
};

export default useProducts;
