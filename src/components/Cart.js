import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./../utils/cartSlice"

const Cart = () => {
    //make sure you are choosing the right portion of the store - performance
    const cartItems = useSelector((store) => store.cart.items);

    // const store = useSelector(store)
    // const cartItems = store.cart.items; - perfomanc issue


    // console.log("cart items", cartItems)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return <div>
        <div className="flex flex-col items-center text-center justify-center m-4 p-4 w-[75%] mx-auto border-sky-100 border shadow-md">
            <div className="flex">
                <h1 className="text-bold text-2xl border-b-2 mb-4">Cart Items:</h1>
            </div>
            <button className="bg-red-200 rounded-md text-red-500 p-2" onClick={handleClearCart}>Clear Cart</button>
            <div>
                {/* <ol className="text-left">
                    {cartItems.map((item) => <li>{item}</li>)}
                </ol> */}
                {cartItems.length === 0 && <div className="text-bold">Please add Items</div>}
                <ItemList items={cartItems} />
            </div>
        </div>

    </div>
}

export default Cart;