import { useEffect, useState } from "react";
import { getStoredItem } from "../../Utlitity/localStorage";
import { useLoaderData } from "react-router-dom";
import ReadBook from "../ReadBook/ReadBook";
import PropTypes from 'prop-types';

const ReadBooks = ({sortedBooks}) => {    
    console.log(sortedBooks)
    
    const allBooks = useLoaderData()
    console.log(allBooks)

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
    
    return (
        <div>
            <div className="text-start lg:text-center">
                <h1 className="text-3xl lg:text-4xl font-bold">Total Read Books:{reads.length}</h1>
            </div>
            <div>
                {
                    sortedBooks.length > 0 && sortedBooks.map(read => <ReadBook key={read.id} read={read}></ReadBook>)
                }
                {
                    sortedBooks.length === 0 && reads.map(read => <ReadBook key={read.id} read={read}></ReadBook>)
                }
            </div>            
        </div>
    );
};

ReadBooks.propTypes = {
    sortedBooks: PropTypes.array.isRequired
}

export default ReadBooks;