import { useEffect, useState } from "react";
import { getStoredItem } from "../../Utlitity/localStorage";
import { useLoaderData } from "react-router-dom";
import ReadBook from "../ReadBook/ReadBook";

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
    console.log(reads)
    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl font-bold">Total Read Books: {reads.length}</h1>
            </div>
            <div>
                {
                    reads.map(read => <ReadBook key={read.id} read={read}></ReadBook>)
                }
            </div>            
        </div>        
    );
};


export default ReadBooks;