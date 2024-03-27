import React, { createContext, useEffect, useState } from 'react';
import Dropdown from "../DropDown/DropDown";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import { useLoaderData } from 'react-router-dom';
import { getStoredItem } from '../../Utlitity/localStorage';

export const SortContext = createContext('Function')

const ListedBooks = () => {

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
    
    console.log(reads)

    // part brought from ReadBooks


    const [sortedBooks, setSortedBooks] = useState([])

    const handleSortButtonClick = (array, props) => {
        if (props === 'rating') {
            const rearranged = [...array].sort((a, b) => a.rating - b.rating);
            setSortedBooks(rearranged);
        }
        else if (props === 'yearOfPublishing') {
            const rearranged = [...array].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setSortedBooks(rearranged);
        }
        else if (props === 'totalPages') {
            const rearranged = [...array].sort((a, b) => a.totalPages - b.totalPages);
            setSortedBooks(rearranged);
        }

    }
    console.log(sortedBooks)









    // const [sortedData, setSortedData] = useState([])
    // const handleSortButton = e =>{
    //     console.log(e)
    // }

    return (
        <div>
            <SortContext.Provider>
                <div className="text-center mt-9 mb-28">
                    <h1 className="text-4xl font-bold mb-4">Discover Your Next Favorite Read <br /> Your Book Collection</h1>
                    <Dropdown handleSortButtonClick={handleSortButtonClick} ></Dropdown>
                </div>
                <div role="tablist" className="tabs tabs-lifted mx-1 lg:mx-24">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read list" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box  p-1 lg:p-6">
                        <ReadBooks reads={reads} sortedBooks={sortedBooks}></ReadBooks>
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
