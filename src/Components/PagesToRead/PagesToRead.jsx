import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredItem } from '../../Utlitity/localStorage';
const PagesToRead = () => {
    
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

    return (
        <div>
            <h1>Hello from page tab:{reads.length}</h1>
        </div>
    );
};
PagesToRead.propTypes = {
    read: PropTypes.object.isRequired
}
export default PagesToRead;