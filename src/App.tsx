import { MenuItems } from "./components/MenuItems";
import { OrderContents } from "./components/OrderContents";
import { menuItems } from "./data/db";
import { useOrder } from "./hooks/useOrder";

function App() {

  const { order, addItem } = useOrder()


  return (
    <>
      <header className="bg-slate-800 py-4">
        <h1 className="text-center text-yellow-50 font-bold text-2xl uppercase">
          Calculadora de propina y consumo
        </h1>
      </header>

      <main className="max-w-6xl mx-auto py-20 grid sm:grid-cols-2">
        <div className="">
          <h2 className="text-4xl font-black">Menu</h2>
          {menuItems.map((item) => (
            <MenuItems
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
        </div>


        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents
            order={order}
          />
        </div>
      </main>
    </>
  );
}

export default App;
