import { menuItems } from "./data/db";

console.log(menuItems);
function App() {
  return (
    <>
      <header className="bg-slate-800 py-4">
        <h1 className="text-center text-yellow-50 font-bold text-2xl uppercase">
          Calculadora de propina y consumo
        </h1>
      </header>

      <main className="max-w-6xl mx-auto py-20 grid sm:grid-cols-2">
        <div className="text-center bg-red-500">
          <h2>Menu</h2>
        </div>

        <div className="text-center bg-red-800">
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
