import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { RiGroupLine, RiPagesLine } from "react-icons/ri";
const WishListBook = ({ read }) => {
    const { publisher, bookName, image, author, category, rating, tags, totalPages, yearOfPublishing } = read
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-12 w-[1050px]">
                <img src={image} className="w-[230px] rounded-lg shadow-2xl" />
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold play">{bookName}</h1>
                    <p className="my-4 font-medium">By: {author}</p>
                    <div className='flex justify-start gap-5 items-center'>
                        <h1 className='font-bold'>tag:</h1>
                        <div className='flex items-center gap-4 mt-2'>
                            {
                                tags.map((tag, idx) => <p key={idx} className="text-[#23BE0A] font-medium mb-2">#{tag}</p>)
                            }
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiLocationOn></CiLocationOn>
                            <p className='text-[#131313CC]'>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center text-[#13131399]'>
                        <RiGroupLine></RiGroupLine>
                        <p>Publisher: {publisher}</p>
                        <div className='flex items-center gap-2'>
                            <RiPagesLine></RiPagesLine>
                            <p>Page: {totalPages}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mt-8'>
                        <h4 className='bg-[#328EFF26] text-[#328EFF] px-5 rounded-full py-2 font-medium text-base'>Category: {category}</h4>
                        <h4 className='bg-[#FFAC3326] text-[#FFAC33] px-5 rounded-full py-2 font-medium text-base'>Rating: {rating}</h4>
                        <button className="bg-[#23BE0A] px-5 rounded-full py-2 text-white font-medium text-base">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

WishListBook.propTypes = {
    read: PropTypes.object.isRequired
}
export default WishListBook;