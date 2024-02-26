import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addToCart } from "../utils/cartSlice";
const ItemList = ({ items, dummy }) => {

    console.log("items", items)
    console.log("..........", items)
    //dispatch an action - give to us by react-redux
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        // dispatch(addToCart(item.card.info.name))
        dispatch(addToCart(item))
    }
    return <div>

        {items.map((item) => (<div key={item?.card?.info?.id}>
            <div className="flex justify-between mb-2 mt-2 p-2 border-b-2 hover:bg-slate-50 cursor-pointer">
                <div className="flex items-center gap-2">
                    <img src={CDN_URL + item?.card?.info?.imageId} className="w-14" />
                    <span className="mr-2">{item?.card?.info?.name}</span>
                </div>
                <div className="flex gap-2">
                    <span> - Rs.{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                    <button className="bg-white rounded-lg shadow-md text-black p-2"
                        // onClick={handleAddItem}
                        // onClick={handleAddItem(item)} // callback function 
                        onClick={() => handleAddItem(item)} //calling function right away
                    >Add+</button>
                </div>

            </div>
            {/* <p>{item?.card?.info?.description}</p> */}
        </div>))}

    </div>
}

export default ItemList;