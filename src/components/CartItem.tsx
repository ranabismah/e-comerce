const CartItem = ({ item, onDelete, onUpdateQuantity }: any) => {
    return (
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
        <div className="flex items-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-lg mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p>${item.price}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button onClick={() => onUpdateQuantity(item.id, 1)} className="mr-2">
            +
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, -1)} className="ml-2">
            -
          </button>
          <button onClick={() => onDelete(item.id)} className="ml-4 text-red-500">
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default CartItem;
  