import { useState } from "react"
import { MenuItem, OrderItem } from '../types';

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {

        console.log(item)
    }
    return {
        addItem
    }
}