import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {

    console.log("items", items)
    return <div>

        {items.map((item) => (<div key={item.card.info.id}>
            <div className="flex justify-between mb-2 mt-2 p-2 border-b-2 hover:bg-slate-50 cursor-pointer">
                <div className="flex items-center gap-2">
                    <img src={CDN_URL + item.card.info.imageId} className="w-14" />
                    <span className="mr-2">{item?.card?.info?.name}</span>
                </div>
                <span> - Rs.{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
            </div>
            {/* <p>{item?.card?.info?.description}</p> */}
        </div>))}

    </div>
}

export default ItemList;