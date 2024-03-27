import { useEffect, useState } from "react";
import { getStoredItemWishlist } from "../../Utlitity/wishlistLocalStorage";
import { useLoaderData } from "react-router-dom";
import WishListBook from "../WishListBook/WishListBook";

const WishlistBooks = () => {const allBooks = useLoaderData()
    const [reads, setReads] = useState([])
    useEffect(() => {
        const readStored = getStoredItemWishlist()
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
            <div className="text-start lg:text-center">
                <h1 className="text-3xl lg:text-4xl font-bold">Total Wishlist books: {reads.length}</h1>
            </div>
            <div>
                {
                    reads.map(read => <WishListBook key={read.id} read={read}></WishListBook>)
                }
            </div>
        </div>
    );
};

export default WishlistBooks;