import "./App.css";
import ListItems from "../components/List-items";

function App() {
  return (
    <>
      <div className="w-dvw h-dvh flex items-center flex-col bg-[#FF3131] overflow-hidden">
        <div className=" flex flex-col text-left h-36 pt-12 mr-20 text-white md:mr-48 xl:mr-36">
          <h1 className="w-full text-shadow-md text-3xl ml-8 lg:ml-[5px] xl:text-3xl xl:ml-9">
            Supermercado
          </h1>
          <h2 className="w-full text-4xl text-shadow-md ml-8 pt-[2px] lg:text-5xl xl:text-[2.8rem]">
            Lista de Compras
          </h2>
        </div>
        <ListItems />
      </div>
    </>
  );
}

export default App;
