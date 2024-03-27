import { CircleLoader  } from "react-spinners";
const Spinner = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[100vh]">
            <CircleLoader
            color='#36d7b7'
            size={100}            
            ></CircleLoader>
            
        </div>
    );
};

export default Spinner;