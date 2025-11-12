import { useState } from "react";
import type { Item } from "./Item";
import { GrClose } from "react-icons/gr";

export default function Modal(prop: {
  actionFunc: (item: Item) => void;
  closeModal: () => void;
  action: "edit" | "add" | "remove";
  name?: string;
  quantity?: string;
  confirm?: () => void;
}) {
  const [productItem, setProductItem] = useState<string>(
    prop.name === undefined ? "" : prop.name
  );
  const [quantityItems, setQuantityItems] = useState<string>(
    prop.quantity === undefined ? "" : prop.quantity
  );

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
      <div className="flex flex-col w-80 h-72 absolute top-40 bg-[#FF3131] text-zinc-100 shadow-2xl border-none rounded-3xl md:w-96 xl:w-96 xl:h-80">
        <div className="popup-overly">
          <div className="popup-content">
            <button
              onClick={prop.closeModal}
              className="flex text-xl pl-72 pt-3 pb-1 text-grey-300 xl:pl-[21.5rem] xl:text-2xl"
            >
              <GrClose />
            </button>

            {prop.action === "remove" ? (
              <>
                <h2 className="text-3xl text-grey-300 py-8 xl:text-3xl text-center">
                  Remover produto?
                </h2>
                <div className="flex justify-around mt-6 md: xl:px-6">
                  <button
                    onClick={prop.closeModal}
                    className="bg-red-600 w-32 h-10 rounded-full border-2 border-red-700 hover:bg-red-700  active:scale-95 shadow-lg flex items-center justify-center text-zinc-100 transition-all duration-300 xl:w-36 xl:h-12"
                  >
                    Não
                  </button>
                  <button
                    onClick={() => prop.confirm?.()}
                    className="bg-green-600 w-32 h-10 rounded-full border-2 border-green-700 hover:bg-green-700 active:scale-95 shadow-lg flex items-center justify-center text-zinc-100 transition-all duration-300 xl:w-36 xl:h-12"
                  >
                    Sim
                  </button>
                </div>
              </>
            ) : (
              <>
                {prop.action === "add" ? (
                  <h2 className="text-2xl text-grey-300 py-2 xl:text-3xl">
                    Adicionar Produto
                  </h2>
                ) : (
                  <h2 className="text-2xl text-grey-300 py-2 xl:text-3xl">
                    Editar Produto
                  </h2>
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
                    <h2 className="text-lg text-grey-300 text-shadow-lg">
                      Adicionar Produto
                    </h2>
                  ) : (
                    <h2 className="text-lg text-grey-300 text-shadow-lg">
                      Guardar
                    </h2>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
