import { useEffect, useState } from "react";
import { getStoredItem } from "../../Utlitity/localStorage";
import PropTypes from 'prop-types';
import { useLoaderData } from "react-router-dom";

const ReadBooks = () => {
        const allBooks = useLoaderData()
        const [read, setRead] = useState([])
        useEffect(()=>{
            const readStored= getStoredItem()
            if(readStored.length > 0){
                const reads = []
                for (const id of readStored){
                    const readID = allBooks.find(book => book.id === id)
                    console.log(readID)
                    if(readID){
                        reads.push(readID)
                    }
                    setRead(reads)
                }
                console.log(reads)                  

            }
        },[])
        console.log(read)
    return (
        <div>
            <h1>Hello from read books: {read.length}</h1>
        </div>
    );
};

ReadBooks.propTypes={
    allBooks: PropTypes.array.isRequired  
}

export default ReadBooks;