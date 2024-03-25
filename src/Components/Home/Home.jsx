import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Home = () => {
    const books = useLoaderData()
    console.log(books)

    return (
        <div className="mx-28">
            {/* Banner section */}
            <section className="flex items-center gap-6">
                <div className="ml-9">
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
                <div>
                    {
                     books.map(book => <Book
                     key={book.id}
                     book={book}                     
                     ></Book>)   
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;