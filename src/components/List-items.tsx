import { useState } from "react";
import { ItemProps, type Item } from "./Item";
import Modal from "./Modal";
import SearchBar from "./SearchBar";

export default function ListItems() {
  const [product, setProduct] = useState<Item[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<"add" | "edit">("add");
  const [search, setSearch] = useState("");
  const [toBeEditedId, setToBeEditedId] = useState("");

  function addItem(item: Item) {
    setProduct([...product, item]);
  }

  function editItem(item: Item) {
    const update = product.map((e) =>
      e.id === toBeEditedId
        ? { ...e, product: item.product, quantity: item.quantity }
        : e
    );
    setProduct(update);
  }

  function removeItem(id: string) {
    const index: number = product.findIndex((ele) => ele.id === id);
    setProduct(product.slice(0, index).concat(product.slice(index + 1)));
  }

  function checkbox(id: string) {
    const update = product.map((e) =>
      e.id === id ? { ...e, checked: !e.checked } : e
    );
    setProduct(update);
  }

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="w-80 flex flex-col items-center mx-auto shadow-xl md:w-[45rem] xl:w-full">
      <SearchBar value={search} onChange={(ev) => setSearch(ev.target.value)} />

      <div className="bg-white h-[70dvh] mt-2 rounded-3xl shadow-2xl flex flex-col md:w-[45rem] md:h-[78dvh] lg:w-[55rem] xl:w-[3/5] xl:h-[65dvh] xl:mb-96">
        <div className="mx-auto w-80 bg-gray-200 h-16 rounded-t-3xl flex items-center justify-center shadow-lg md:w-[45rem] lg:w-[55rem] xl:w-full">
          <button
            onClick={() => {
              setModalAction("add");
              openModal();
            }}
            className="addBtn bg-[#FF3131] text-zinc-100 w-44 h-10 rounded-full hover:bg-red-600 active:scale-95 text-shadow-sm shadow-lg flex mx-auto items-center justify-center transition-all duration-300 xl:w-60 xl:h-12 xl:text-2xl xl:pb-1"
          >
            Adicionar Item
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-2 scrollbar-thin scrollbar-track-gray-100">
          {product
            .filter((item) =>
              item.product.toLowerCase().includes(search.toLocaleLowerCase())
            )
            .sort((a, b) => (a.product > b.product ? 1 : -1))
            .map((elemento, index) => (
              <ItemProps
                key={index}
                id={elemento.id}
                checkbox={() => checkbox(elemento.id)}
                checked={elemento.checked}
                product={elemento.product}
                quantity={elemento.quantity}
                edit={() => {
                  setToBeEditedId(elemento.id);
                  setModalAction("edit");
                  openModal();
                }}
                remove={() => removeItem(elemento.id)}
              />
            ))}
          {modalOpen && (
            <Modal
              actionFunc={modalAction === "add" ? addItem : editItem}
              action={modalAction}
              closeModal={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}
