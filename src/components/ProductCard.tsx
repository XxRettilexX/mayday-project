type ProductCardProps = {
    title: string;
    price: number;
};

export default function ProductCard({ title, price }: ProductCardProps) {
    return (
        <article className="product-card">
            <h3 className="product-title">{title}</h3>
            <p className="product-price">{price} €</p>
        </article>
    );
}
