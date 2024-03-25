import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center lg:text-center mt-[35vh] lg:mt-[20vh]'>
            <h1 className='text-8xl lg:text-[220px] work font-medium mb-3'><span className='text-[#23BE0A]'>O</span><span className='text-[#59C6D2]'>O</span>PS!</h1>
            <h1 className='text-2xl lg:text-4xl font-extrabold mb-8'>404-Page Not Found</h1>
            <button className='btn bg-blue-gray-600 w-48 lg:w-56 text-2xl lg:text-3xl text-white h-20 rounded-xl hover:bg-blue-gray-300'><Link to='/'>Home</Link></button>
        </div>
    );
};

export default ErrorPage;