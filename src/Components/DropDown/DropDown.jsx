import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
import { useContext } from "react";
  import { FaAngleDown } from "react-icons/fa";
import { SortContext } from "../ListedBooks/ListedBooks";

   
  export default function Dropdown({handleSortButton}) {
    return (
      <Menu>
        <MenuHandler>
          <Button className="bg-[#23BE0A]"><span className="flex gap-3 items-center font-bold ">Sort By<FaAngleDown className="text-lg"></FaAngleDown></span></Button>
        </MenuHandler>
        <MenuList className="bg-green-50">
          <MenuItem className="text-black font-bold mx-auto" onClick={()=>handleSortButton('rating')} >Rating</MenuItem>
          <MenuItem className="text-black font-bold" onClick={()=>handleSortButton('yearOfPublishing')}>Number of pages</MenuItem>
          <MenuItem className="text-black font-bold" onClick={()=>handleSortButton('publisher')}>Publisher year</MenuItem>          
        </MenuList>
      </Menu>
    );
  }