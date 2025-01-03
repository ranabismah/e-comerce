// src/app/data/products.ts
export const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=150", {
      cache: "no-store", // Prevent caching for fresh data every time
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products.map((item: any) => ({
      id: item.id.toString(),
      title: item.title,
      description: item.description,
      images: [item.thumbnail], // Use 'thumbnail' from DummyJSON
      price: item.price,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProduct = async (id: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const product = await response.json();
    return {
      id: product.id.toString(),
      title: product.title,
      description: product.description,
      images: [product.thumbnail],
      price: product.price,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
