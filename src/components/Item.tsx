import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";

export interface Item {
  id: string;
  product: string;
  quantity: string;
  checked: boolean; //para comprado
}

export interface ItemPropss {
  id: string;
  product: string;
  quantity: string;
  checked: boolean;
  checkbox: () => void;
  edit: () => void;
  remove: () => void;
}

export function ItemProps(props: ItemPropss) {
  return (
    <div className="grid grid-cols-[40px_1fr_150px] items-center gap-5 mx-1 font-semibold text-lg mt-3 border-b-2 pb-2">
      {props.checked ? (
        <img
          className="w-6 h-6 flex items-center cursor-pointer ml-[6px] mt-2"
          src="../assets/images/c-image.png"
          alt="checked"
          onClick={props.checkbox}
        />
      ) : (
        <div
          className="w-5 h-5 mx-2 border border-zinc-500 rounded-lg cursor-pointer mt-2"
          onClick={props.checkbox}
        ></div>
      )}

      <div className="product justify-self-start mt-2 text-zinc-700 xl:mx-20">
        <p>{props.product}</p>
      </div>

      <div className="flex justify-around mr-0 gap-5 font-light text-zinc-700 items-center justify-self-end mt-1 xl:gap-14">
        {props.checked ? (
          <div className="text-green-600 border border-green-600 text-[13px] rounded-2xl px-[2px] py-0 xl:px-4 xl:font-medium">
            Comprado
          </div>
        ) : (
          <>
            <p>{props.quantity}x</p>
            <button onClick={props.edit} className="text-zinc-600">
              <MdOutlineEdit />
            </button>
          </>
        )}

        <button onClick={props.remove} className="text-zinc-600 mr-2">
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}
