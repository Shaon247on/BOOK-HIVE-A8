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
import { getStoredItemWishlist } from "../../Utlitity/wishlistLocalStorage";
import PropTypes from 'prop-types';


const  Dropdown = ({ handleSortButtonClick }) =>{

  const allBooks = useLoaderData();


  // For ReadBooks Section
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

  // For WishlistBooks section
  const [wishlist, setWishlist] = useState([])
  useEffect(() => {
    const readStored = getStoredItemWishlist()
    if (readStored.length > 0) {
      const readList = []
      for (const id of readStored) {
        const readID = allBooks.find(book => book.id === id)
        if (readID) {
          readList.push(readID)
        }
        setWishlist(readList)
      }
    }
  }, [])

  return (
    <Menu>
      <MenuHandler>
        <Button className="bg-[#23BE0A]"><span className="flex gap-3 items-center font-bold ">Sort By<FaAngleDown className="text-lg"></FaAngleDown></span></Button>
      </MenuHandler>
      <MenuList className="bg-green-50">
        <MenuItem className="text-black font-bold mx-auto" onClick={() => handleSortButtonClick(wishlist, reads, 'rating')} >Rating</MenuItem>
        <MenuItem className="text-black font-bold" onClick={() => handleSortButtonClick(wishlist, reads, 'totalPages')}>Number of pages</MenuItem>
        <MenuItem className="text-black font-bold" onClick={() => handleSortButtonClick(wishlist, reads, 'yearOfPublishing')}>Published year</MenuItem>
      </MenuList>
    </Menu>
  );
}

Dropdown.propTypes = {
  handleSortButtonClick: PropTypes.func
}

export default Dropdown