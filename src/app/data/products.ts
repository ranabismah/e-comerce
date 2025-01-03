export const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=90", {
      cache: "no-store", // Prevent caching
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    const transformedData = data.products.map((item: any) => ({
      id: item.id.toString(),
      title: item.title,
      description: item.description,
      images: [item.image], // Single image URL
      price: item.price,
    }));
    return transformedData;
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
      images: [product.image], 
      price: product.price,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};


