import { useState } from "react";
import type { Item } from "./Item";
import { GrClose } from "react-icons/gr";

export default function Modal(prop: {
  actionFunc: (item: Item) => void;
  closeModal: () => void;
  action: "edit" | "add";
}) {
  const [productItem, setProductItem] = useState<string>("");
  const [quantityItems, setQuantityItems] = useState<string>("");

  function addItemToList() {
    const newItemToList = {
      id: Date.now().toString(),
      product: productItem,
      quantity: quantityItems,
      checked: false,
    };
    prop.actionFunc(newItemToList);
    prop.closeModal();
  }

  return (
    <div className="flex justify-center bg-opacity-40 backdrop-brightness-[.2] w-full h-full fixed top-0 left-0 z-50">
      <div className="flex flex-col w-5/6 h-72 absolute top-40 bg-[#FF3131] text-zinc-100 border-none rounded-3xl md:w-80 xl:w-96 xl:h-80">
        <div className="popup-overly">
          <div className="popup-content">
            <button onClick={prop.closeModal} className="flex text-xl pl-72 pt-3 pb-1 text-grey-300 xl:pl-[21.5rem] xl:text-2xl">
              <GrClose />
            </button>
            {prop.action === "add" ? (
              <h2 className="text-2xl text-grey-300 py-2 xl:text-3xl">Adicionar Produto</h2>
            ) : (
              <h2 className="text-2xl text-grey-300 py-2 xl:text-3xl">Editar Produto</h2>
            )}
            <input
              type="text"
              name="product"
              placeholder="Produto"
              value={productItem}
              className="inputForm flex mx-auto w-60 h-10 my-3 px-6 item-center rounded-full bg-zinc-100 text-zinc-700 text-lg outline-[0.001px] xl:w-80"
              onChange={(e) => setProductItem(e.target.value)}
              required
            />
            <input
              type="text"
              name="quantity"
              placeholder="Quantidade"
              value={quantityItems}
              className="inputForm flex mx-auto w-60 h-10 my-3 px-6 item-center rounded-full bg-zinc-100 text-zinc-700 text-lg outline-[0.001px] xl:w-80"
              onChange={(e) => setQuantityItems(e.target.value)}
              required
            />

            <button
              className="addBtn bg-red-700 mt-5 w-44 h-10 rounded-full outline-none hover:bg-red-800 active:scale-95 text-shadow-sm shadow-lg flex mx-auto items-center justify-center text-zinc-100 transition-all duration-300 xl:w-56 xl:h-12 "
              onClick={addItemToList}
            >
              {prop.action === "add" ? (
                <h2 className="text-lg text-grey-300 text-shadow-lg">Adicionar Produto</h2>
              ) : (
                <h2 className="text-lg text-grey-300 text-shadow-lg">Guardar</h2>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
