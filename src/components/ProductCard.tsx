import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-500 mt-2">${product.price}</p>
      <Link href={`/products/${product.id}`}>
        <button className="mt-4 py-2 px-6 bg-[#6A0572] text-white rounded-md hover:bg-[#C77DFF] transition-colors">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
