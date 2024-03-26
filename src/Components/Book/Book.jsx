import { useLoaderData, useParams } from "react-router-dom";

const Book = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const idNum = parseInt(id)
    const detailedBook = books.find(book => book.id === idNum)
    const { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing
    } = detailedBook
    return (
        <div className="flex gap-12 mx-24 mt-8 items-center">
            <div className="p-12 w-1/2 h-[580px] text-center ">
                <img src={image} alt="" className="w-[425px] h-full mx-auto" />
            </div>
            <div className="flex-1 text-[#131313] flex flex-col">
                <h1 className="play text-5xl font-bold mb-2">{bookName}</h1>
                <h3 className="text-[18px] text-[#131313CC] font-medium mb-7">By: <strong>{author}</strong></h3>
                <h5 className="text-[18px] text-[#131313CC] font-semibold mb-7">{category}</h5>
                <p className="flex-grow"><strong>Review:</strong> <span className="text-[#131313B3]">{review}</span> </p>
                <div className="flex gap-7 mt-7 mb-10">
                    <h2 className="font-bold">Tag:</h2>
                    {
                        tags.map((tag, idx) => <p key={idx} className="text-[#23BE0A] font-semibold mb-2">#{tag}</p>)
                    }
                </div>
                <table className="mb-8">
                    <tbody>
                        <tr>
                            <td className="text-[#131313B3]">Number of Pages:</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="pl-16 text-[#131313] font-semibold">{totalPages}</td>
                        </tr>
                        <tr>
                            <td className="text-[#131313B3]">Publisher:</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="pl-16 text-[#131313] font-semibold">{publisher}</td>
                        </tr>
                        <tr>
                            <td className="text-[#131313B3]">Year of Publishing:</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="pl-16 text-[#131313] font-semibold">{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className="text-[#131313B3]">Rating:</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="pl-16 text-[#131313] font-semibold">{rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button className="btn w-[145px] mr-4 bg-[#1313134D] font-semibold">Read</button><button className="btn w-[145px] hover:bg-[#59C6D299] bg-[#59C6D2] text-white font-semibold">Wishlist</button>

                </div>
            </div>
        </div>
    );
};

export default Book;