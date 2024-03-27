import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { getStoredItem } from "../../Utlitity/localStorage";
import { useLoaderData } from "react-router-dom";

   
  export default function Dropdown({handleSortButtonClick}) {

    const allBooks = useLoaderData();

    const [reads, setReads] = useState([])
    useEffect(() => {
        const readStored = getStoredItem()
        if (readStored.length > 0) {
            const readList = []
            for (const id of readStored) {
                const readID = allBooks.find(book => book.id === id)
                if (readID) {
                    readList.push(readID)
                }
                setReads(readList)
            }
        }
    }, [])

    
    return (
      <Menu>
        <MenuHandler>
          <Button className="bg-[#23BE0A]"><span className="flex gap-3 items-center font-bold ">Sort By<FaAngleDown className="text-lg"></FaAngleDown></span></Button>
        </MenuHandler>
        <MenuList className="bg-green-50">
          <MenuItem className="text-black font-bold mx-auto" onClick={()=>handleSortButtonClick(reads, 'rating')} >Rating</MenuItem>
          <MenuItem className="text-black font-bold" onClick={()=>handleSortButtonClick(reads, 'totalPages')}>Number of pages</MenuItem>
          <MenuItem className="text-black font-bold" onClick={()=>handleSortButtonClick(reads,'yearOfPublishing')}>Publisher year</MenuItem>          
        </MenuList>
      </Menu>
    );
  }