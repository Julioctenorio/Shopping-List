import { type ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchBar(props: SearchBarProps) {
  return (
    <div className="search flex flex-col items-center pb-2 w-full">
      <div className="flex items-center gap-2 w-full  bg-white rounded-full shadow-lg px-4 py-2 lg:h-12 sm:w-[28rem] lg:w-[32rem] xl:mt-5">
        <CiSearch className="text-zinc-700 text-2xl lg:text-3xl flex-shrink-0" />
        <input
          type="text"
          placeholder="Pesquisar Item"
          className="w-full bg-transparent text-zinc-700 text-lg  text-shadow-sm focus:outline-none placeholder:text-zinc-400 focus:text-shadow-none lg:text-2xl lg:pb-2 xl:pt-1"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
