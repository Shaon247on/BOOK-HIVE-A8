import { IoIosStarOutline } from "react-icons/io";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Books = ({ books }) => {
    const { id, author, bookName, category, image, rating, tags } = books
    
    
    return (
        <div className="card transition border-2 p-4 hover:scale-105 hover:border-[#59C6D2] hover:no-underline focus:no-underline">
            <Link to={`/${id}`}>
                <figure><img src={image} alt={bookName} className="h-[190px] w-[150px]" /></figure>
                <div className="card-body">
                    <div className="flex">
                        {
                            tags.map((tag, idx) => <p key={idx} className="text-[#23BE0A] font-medium mb-2">{tag}</p>)
                        }
                    </div>
                    <h2 className="card-title play text-2xl font-bold ">{bookName}</h2>
                    <p className="font-semibold text-[#131313CC] mb-7">By: {author}</p>
                    <div className="card-actions justify-between">
                        <p className="font-medium text-[#131313CC]">{category}</p>
                        <div className="flex items-center gap-2">
                            <p className="text-[16px] font-medium text-[#131313CC]">{rating}</p>
                            <IoIosStarOutline className="text-[#131313CC] text-[18px] mt-[-2px]"></IoIosStarOutline>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Books.propTypes = {
    books: PropTypes.object.isRequired
}

export default Books;