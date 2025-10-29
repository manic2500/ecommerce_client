import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { Link } from "react-router-dom";
import type { Product } from "@/types/product";


export default function ProductCard({ product }: { product: Product }) {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader className="p-0 items-center">
                <Link to={`/product/${product.slug}`}>
                    <img src={product.images[0]} alt={product.name} height={300} width={300} />
                </Link>
            </CardHeader>
            <CardContent className="grid gap-4 px-4">
                <div className="text-lg font-black">
                    {product.brand}
                </div>
                <Link to={`/product/${product.slug}`}>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                </Link>
                <div className="flex-between">
                    <p>{product.rating.toString()} Stars</p>
                    {product.stock > 0 ? (
                        <ProductPrice value={Number(product.price)} />
                    ) : <p className="text-destructive">
                        Out Of Stock
                    </p>}
                </div>
            </CardContent>
        </Card>
    );
};