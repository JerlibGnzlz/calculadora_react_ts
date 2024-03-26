import { useMemo } from "react"
import { OrderItem } from "../types"

type OrderTotalProps = {
    order: OrderItem[]
    tip: number

}


export const OrderTotal = ({ order, tip }: OrderTotalProps) => {

    const subtotalSuma = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipSuma = useMemo(() => subtotalSuma * tip, [tip, order])

    const totalSuma = useMemo(() => subtotalSuma + tipSuma, [tip, order])

    return (

        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar:{" "}
                    <span className="font-bold">${" "}{subtotalSuma}</span>
                </p>
                <p>Propina:{" "}
                    <span className="font-bold">${" "}{tipSuma}</span>
                </p>
                <p>Total a pagar:{" "}
                    <span className="font-bold">${" "}{totalSuma}</span>
                </p>
            </div>
        </>
    )
}
