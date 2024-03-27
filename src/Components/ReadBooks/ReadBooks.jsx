import { useEffect, useState } from "react";
import { getStoredItem } from "../../Utlitity/localStorage";
import { useLoaderData } from "react-router-dom";
import ReadBook from "../ReadBook/ReadBook";
import Dropdown from "../DropDown/DropDown";

const ReadBooks = () => {
    const allBooks = useLoaderData()
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
    
    const [sortedBooks, setSortedBooks] = useState([])
    const sortBooksByRating = (reads) => {
        return [...reads].sort((a, b) => a.rating - b.rating);
    }
    const handleSortButtonClick = () => {
        const sorted = sortBooksByRating(reads);
        setSortedBooks(sorted);
    }
    return (
        <div>
            <div className="text-start lg:text-center">
                <button onClick={handleSortButtonClick}>Try Me</button>
                <h1 className="text-3xl lg:text-4xl font-bold">Total Read Books: {reads.length}</h1>
            </div>
            <div>
                {
                    sortedBooks.length > 0 && sortedBooks.map(read => <ReadBook key={read.id} read={read}></ReadBook>)
                }
                {
                    sortedBooks.length === 0 && reads.map(read => <ReadBook key={read.id} read={read}></ReadBook>)
                }
            </div>
            <Dropdown function={handleSortButtonClick}></Dropdown>
        </div>
    );
};


export default ReadBooks;