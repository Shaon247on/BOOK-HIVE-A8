import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";
import { useState } from "react";

const Blogs = () => {

    const books = useLoaderData()
    const [displayBooks, setDisplayBooks] = useState(6)

    return (
        <div className="text-center">
            <h1 className="text-5xl font-bold mt-5">World of Literary Discourse <br /> Our Blog</h1>
            <p className="text-[#131313B3] font-semibold w-[600px] mx-auto mt-4">Dive into a world of insightful commentary, engaging discussions, and thought-provoking analyses on all things literature. Our blog is your gateway to discovering new authors, exploring literary genres, and unraveling the mysteries behind beloved classics. </p>
            <div>
                {
                    books.slice(0, displayBooks).map(book => <Blog key={book.id} book={book}></Blog>)
                }
            </div>
            <div className={displayBooks === books.length ? 'hidden' : "text-center my-3"}>
                <button onClick={() => setDisplayBooks(books.length)} className="btn bg-[#59C6D2] text-white text-[18px] font-semibold w-36">Show All</button>
            </div>
        </div>
    );
};

export default Blogs;