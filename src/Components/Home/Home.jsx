import { useLoaderData } from "react-router-dom";
import Books from "../Books/Books";
import { useState } from "react";

const Home = () => {
    const allBooks = useLoaderData()
    const [displayBooks, setDisplayBooks] = useState(6)
    console.log(allBooks)

    return (
        <div className="mx-28">
            {/* Banner section */}
            <section className="flex items-center gap-6 mt-4 mb-[60px]">
                <div className="ml-5">
                    <h1 className="play font-bold text-5xl mb-5">Explore Worlds Through <br /> Pages Book Reviews</h1>
                    <p className="text-sm text-gray-600 w-[500px] ">Welcome to <span className="font-semibold underline">BOOK HIVE</span>,<br /> Where literature comes to life! Dive into captivating reviews, insightful critiques, and personalized recommendations. Let the adventure begin!</p>
                    <button className="btn bg-[#23BE0A] text-white font-bold mt-9">View The List</button>
                </div>
                <div className=""><img src="https://i.ibb.co/F5W9FQF/banner.jpg" alt="" /></div>
            </section>
            {/* books Section */}
            <section>
                <div className="text-center">
                    <h1 className="text-4xl font-bold play mb-7">Books</h1>
                    <p className="w-[620px] mx-auto">Uncover literary treasures in our book section, where we offer in-depth analyses, thought-provoking discussions, and curated recommendations across various genres. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-5">
                    {
                     allBooks.slice(0,displayBooks).map(books => <Books
                     key={books.id}
                     books={books}                     
                     ></Books>)   
                    }
                </div>
                <div className={displayBooks === allBooks.length? 'hidden': "text-center my-3"}>
                    <button onClick={() =>setDisplayBooks(allBooks.length)} className="btn bg-[#59C6D2] text-white text-[18px] font-semibold w-36">Show All</button>
                    </div>
            </section>
        </div>
    );
};

export default Home;