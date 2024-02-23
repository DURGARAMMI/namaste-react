import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // console.log(data)
    // const [showItems, setShowItems] = useState()  
    const handleClick = () => {
        // console.log("handleClick")
        // setShowItems(!showItems);
        //accodian functionality
        setShowIndex();
    }
    return <div>
        {/* {accord header} */}
        <div className="w-8/12 bg-slate-100 shadow-lg p-4 mb-3 mx-auto">
            <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>?</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>

    </div>
}

export default RestaurantCategory;