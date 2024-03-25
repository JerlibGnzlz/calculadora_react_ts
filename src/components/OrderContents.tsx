import { OrderItem } from "../types"

type OrderContentsProps = {

  order: OrderItem[]
}


export const OrderContents = ({ order }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl mx-3">Consumo</h2>

      <div className="space-y-3 mt-6 mx-3">
        {order.length === 0 ?
          <p className="text-center">La orden esta vacia</p>
          : (
            order.map(item => (
              <div key={item.id}>
                <p>
                  {item.name}
                </p>
              </div>
            ))

          )

        }

      </div>
    </div>
  )
}

