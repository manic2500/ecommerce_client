import type { Product } from "@/types/product";
import ProductCard from "./product-card";


export default function ProductList({ data, title, limit }: { data: Product[], title?: string, limit?: number }) {
    const limitedData = limit ? data.slice(0, limit) : data
    return (
        <div className="my-10">
            <h2 className="h2-bold mb-4">{title}</h2>
            {
                limitedData.length > 0
                    ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            limitedData.map((p: Product, index) => (
                                <ProductCard product={p} key={index} />
                            ))
                        }
                    </div>)
                    : (
                        <div>
                            <p>No Products found</p>
                        </div>
                    )
            }
        </div>
    );
};