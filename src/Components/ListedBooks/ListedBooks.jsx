import { useState } from 'react';
import Dropdown from "../DropDown/DropDown";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";


const ListedBooks = () => {
    const [sortedBooks, setSortedBooks] = useState([])
    const [sortedWishlist, setSortedWishlist] = useState([])

    const handleSortButtonClick = (arrayWishlist, arrayRead, props) => {
        if (props === 'rating') {
            const rearrangedRead = [...arrayRead].sort((a, b) => a.rating - b.rating);
            const rearrangedWishlist = [...arrayWishlist].sort((a, b) => a.rating - b.rating);
            setSortedBooks(rearrangedRead);
            setSortedWishlist(rearrangedWishlist)
        }
        else if (props === 'yearOfPublishing') {
            const rearrangedRead = [...arrayRead].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            const rearrangedWishlist = [...arrayWishlist].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setSortedBooks(rearrangedRead);
            setSortedWishlist(rearrangedWishlist)
        }
        else if (props === 'totalPages') {
            const rearrangedRead = [...arrayRead].sort((a, b) => a.totalPages - b.totalPages);
            const rearrangedWishlist = [...arrayWishlist].sort((a, b) => a.totalPages - b.totalPages);
            setSortedBooks(rearrangedRead);
            setSortedWishlist(rearrangedWishlist)
        }

    }

    return (
        <div>
            <div className="text-center mt-9 mb-28">
                <h1 className="text-4xl font-bold mb-4">Discover Your Next Favorite Read <br /> Your Book Collection</h1>
                <Dropdown handleSortButtonClick={handleSortButtonClick} ></Dropdown>
            </div>
            <div role="tablist" className="tabs tabs-lifted mx-1 lg:mx-24">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read list" checked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box  p-1 lg:p-6">
                    <ReadBooks sortedBooks={sortedBooks}></ReadBooks>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-1 lg:p-6">
                    <WishlistBooks sortedWishlist={sortedWishlist}></WishlistBooks>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
