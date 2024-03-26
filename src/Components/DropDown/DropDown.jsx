import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
  import { FaAngleDown } from "react-icons/fa";

   
  export default function Dropdown() {
    return (
      <Menu>
        <MenuHandler>
          <Button className="bg-[#23BE0A]"><span className="flex gap-3 items-center font-bold ">Sort By<FaAngleDown className="text-lg"></FaAngleDown></span></Button>
        </MenuHandler>
        <MenuList className="bg-green-50">
          <MenuItem className="text-black font-bold mx-auto">Rating</MenuItem>
          <MenuItem className="text-black font-bold">Number of pages</MenuItem>
          <MenuItem className="text-black font-bold">Publisher year</MenuItem>          
        </MenuList>
      </Menu>
    );
  }