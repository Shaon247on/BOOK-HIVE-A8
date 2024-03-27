import { useLoaderData, useParams } from "react-router-dom";
import { getStoredItem, savedItem } from "../../Utlitity/localStorage";
import { getStoredItemWishlist, savedItemWishlist } from "../../Utlitity/wishlistLocalStorage";
import toast, { Toaster } from 'react-hot-toast';

const Book = () => {
    const books = useLoaderData()
    const { id } = useParams()    
    
    
    const idNum = parseInt(id)
    const detailedBook = books.find(book => book.id === idNum)
    const { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing
    } = detailedBook

    const handleReadButton = () => {
        const bookedMarked = getStoredItem()
        const exists = bookedMarked.find(booked => booked === idNum)
        if (!exists) {
            savedItem(idNum)
            toast.success('Successfully added to "Read Book"', {
                position: 'top-right',
                style: {
                    background:'#9dd687',
                    color:'white',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    padding:'20px',
                    width:'800px'
                },
            })
        }
        else {
            toast.error('Already exists at "Read Book"', {
                position: 'top-right',
                style: {
                    background:'#e69a94',
                    color:'white',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    padding:'20px',
                    width:'800px'
                },
            });
        }

    }
    const handleWishlistButton = () => {
        const bookedMarked = getStoredItem()
        console.log(bookedMarked)
        const exists = bookedMarked.find(booked => booked === idNum)
        if (!exists) {
            const wishlist = getStoredItemWishlist()
            const present = wishlist.find(list => list === idNum)
            if (!present) {
                savedItemWishlist(idNum)
                toast.success('Successfully added to "Wishlist"', {
                    position: 'top-right',
                    style: {
                        background:'#9dd687',
                        color:'white',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        padding:'20px',
                        width:'800px'
                    },
                })
            }
            else{
                toast.error('Already exists to "Wishlist"', {
                    position: 'top-right',
                    style: {
                        background:'#e69a94',
                        color:'white',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        padding:'20px',
                        width:'800px'
                    },
                });
            }

        }
        else {
            toast.error('Already exists to "Read Book"', {
                position: 'top-right',
                style: {
                    background:'#e69a94',
                    color:'white',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    padding:'20px',
                    width:'800px'
                },
            });
        }

    }
    
    return (
        <div>
            <Toaster></Toaster>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mx-1 lg:mx-24 mt-8 items-center mb-9">
                <div className="p-1 lg:p-12 w-full lg:w-1/2 h-[400px] lg:h-[580px] text-center ">
                    <img src={image} alt="" className="w-[320px] lg:w-[425px] h-[400px] lg:h-full mx-auto" />
                </div>
                <div className="flex-1 text-[#131313] flex flex-col mx-6 lg:mx-0">
                    <h1 className="play text-5xl font-bold mb-2">{bookName}</h1>
                    <h3 className="text-[16px] text-[#131313CC] font-medium mb-7">By: <strong>{author}</strong></h3>
                    <h5 className="text-[16px] text-[#131313CC] font-semibold mb-7">{category}</h5>
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
                        <button onClick={handleReadButton} className="btn w-[145px] mr-4 bg-[#1313134D] font-semibold">Read</button><button onClick={handleWishlistButton} className="btn w-[145px] hover:bg-[#59C6D299] bg-[#59C6D2] text-white font-semibold">Wishlist</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;