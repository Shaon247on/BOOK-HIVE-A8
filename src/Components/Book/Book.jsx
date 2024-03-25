const Book = ({ book }) => {
    const { author, bookName,category, image, publisher,rating,tags} = book
    console.log(book)

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-start gap-0 text-[#23BE0A]">
                    {
                        tags.map(tag => <p>{tag}</p>)
                    }
                </div>
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;