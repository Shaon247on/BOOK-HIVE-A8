import React, { createContext, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Dropdown from "../DropDown/DropDown";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

export const SortContext = createContext('Function')

const ListedBooks = () => {
    const allBooks = useLoaderData();
    console.log(allBooks)
    const [sortedData, setSortedData] = useState([])
    const handleSortButton = e =>{
        console.log(e)
    }

    return (
        <div>
            <SortContext.Provider>
                <div className="text-center mt-9 mb-28">
                    <h1 className="text-4xl font-bold mb-4">Discover Your Next Favorite Read <br /> Your Book Collection</h1>
                    <Dropdown handleSortButton={handleSortButton} ></Dropdown>
                </div>
                <div role="tablist" className="tabs tabs-lifted mx-1 lg:mx-24">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read list" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box  p-1 lg:p-6">
                        <ReadBooks allBooks={allBooks}></ReadBooks> 
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-1 lg:p-6">
                        <WishlistBooks></WishlistBooks>
                    </div>
                </div>
            </SortContext.Provider>
        </div>
    );
};

export default ListedBooks;
