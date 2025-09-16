type Product = {
    name: string;
    price: number;
};

const products: Product[] = [
    { name: "T-shirt", price: 25 },
    { name: "Cappellino", price: 15 },
    { name: "Felpa", price: 45 },
    { name: "Sneakers", price: 80 },
];

export default function List() {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.name} className="product-card">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price} €</p>
                </div>
            ))}
        </div>
    );
}
