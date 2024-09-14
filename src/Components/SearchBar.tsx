import { BsSearch } from "react-icons/bs";
import { FC, InputHTMLAttributes } from 'react';
type  Props = InputHTMLAttributes<HTMLInputElement>

const SearchBar:FC<Props>= (pro)=>{
  return (
    <div className="relative">
      <input {...pro} className="px-2 py-1 w-full rounded-full border border-black w-[800px]" type="text" placeholder="Search" />
      <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}

export default SearchBar;
