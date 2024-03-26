import { useLoaderData } from "react-router-dom";
import Dropdown from "../DropDown/DropDown";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {

    const allBooks = useLoaderData()
    console.log(Array.isArray(allBooks))   

    return (
        <div>
            <div className="text-center mt-9">
                <h1 className="text-4xl font-bold mb-4">Discover Your Next Favorite Read <br /> Your Book Collection</h1>
                <Dropdown></Dropdown>
            </div>
            <div role="tablist" className="tabs tabs-lifted mx-24">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><ReadBooks allBooks={allBooks}></ReadBooks></div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><WishlistBooks></WishlistBooks> </div>
            </div>
        </div>

    );
};

export default ListedBooks;