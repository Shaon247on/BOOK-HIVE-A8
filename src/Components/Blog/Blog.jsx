import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Blog = ({ book }) => {
    const { id, author, bookName, category, image, tags, review } = book
    return (
        <div>
            <h1 className="text-lg lg:text-4xl font-bold my-10 text-start ml-6 md:ml-28 ">Blog. {id} ({category})</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="w-[280px] lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl lg:text-5xl font-bold">{bookName}</h1>
                        <h3>By: {author}</h3>
                        <p className="py-6">{review.slice(0,300)}...</p>
                        <div className="flex justify-start gap-5 ml-4">
                            {
                                tags.map((tag, idx) => <p key={idx} className="text-[#23BE0A] font-semibold mb-2">#{tag}</p>)
                            }
                        </div>
                        <button className="btn w-[145px] hover:bg-[#59C6D299] bg-[#59C6D2] text-white font-semibold mt-5"><Link to={`/${id}`} >Read More</Link></button>
                    </div>
                </div>
            </div>
        </div>

    );
};


Blog.propTypes={
    book: PropTypes.object.isRequired
}
export default Blog;