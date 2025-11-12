import { useState } from "react";
import { ItemProps, type Item } from "./Item";
import Modal from "./Modal";
import SearchBar from "./SearchBar";

export default function ListItems() {
  const [product, setProduct] = useState<Item[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<"add" | "edit" | "remove">(
    "add"
  );
  const [search, setSearch] = useState("");
  const [toBeEditedItem, setToBeEditedItem] = useState<Item>();
  const [toBeRemovedId, setToBeRemovedId] = useState<string>("");

  function addItem(item: Item) {
    setProduct([...product, item]);
  }

  function editItem(item: Item) {
    const update = product.map((e) =>
      e.id === toBeEditedItem?.id
        ? { ...e, product: item.product, quantity: item.quantity }
        : e
    );
    setProduct(update);
  }

  function removeItem(id: string) {
    setToBeRemovedId(id);
    setModalAction("remove");
    openModal();
  }

  function confirmRemove() {
    const index: number = product.findIndex((ele) => ele.id === toBeRemovedId);
    setProduct(product.slice(0, index).concat(product.slice(index + 1)));
    closeModal();
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

      <div className="bg-white w-80 h-[70dvh] mt-2 rounded-3xl shadow-2xl flex flex-col sm:w-[40rem] md:w-[45rem] md:h-[69dvh] lg:w-[55rem] xl:w-11/12 xl:mb-96">
        <div className="mx-auto w-80 bg-gray-200 h-16 rounded-t-3xl flex items-center justify-center shadow-lg sm:w-[40rem] md:w-[45rem] lg:w-[55rem] xl:w-full">
          <button
            onClick={() => {
              setModalAction("add");
              openModal();
            }}
            className="addBtn bg-[#FF3131] text-zinc-100 w-44 h-10 rounded-full hover:bg-red-600 active:scale-95 text-shadow-sm shadow-lg flex mx-auto items-center justify-center transition-all duration-300 lg:w-64 lg:h-12 lg:text-2xl lg:pb-1  xl:pb-1"
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
            .map((elemento) => (
              <ItemProps
                key={elemento.id}
                id={elemento.id}
                checkbox={() => checkbox(elemento.id)}
                checked={elemento.checked}
                product={elemento.product}
                quantity={elemento.quantity}
                edit={() => {
                  setToBeEditedItem(elemento);
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
              name={toBeEditedItem?.product}
              quantity={toBeEditedItem?.quantity}
              closeModal={closeModal}
              confirm={confirmRemove}
            />
          )}
        </div>
      </div>
    </div>
  );
}
