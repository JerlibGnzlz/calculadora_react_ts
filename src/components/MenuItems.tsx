import { MenuItem } from "../types";

type MenuItemPros = {
    item: MenuItem
}


export const MenuItems = ({ item }: MenuItemPros) => {
    return (
        <button
            className="border-2 rounded-lg border-green-600 hover:bg-slate-300 w-full p-3 flex justify-between mb-2 mt-6"
        >
            <p>{item.name}</p>
            <p className="font-black">${" "}{item.price}</p>
        </button>

    )
};
