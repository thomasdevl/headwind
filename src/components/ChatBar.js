import { FiSearch, FiBell, FiUser, FiPlus } from "react-icons/fi";
import { BsHash } from 'react-icons/bs';

const ChatBar = () => {
    return (
        <div className="absolute top-0 left-64 
                        bg-gray-700 
                        w-auto h-auto">
            <TopNavigation />
            <CenterText />
            <BottomNavigation />
        </div>
    );

};


const TopNavigation = () => {

    return (
        <div className="flex items-center justify-between
                        bg-gray-700  
                        w-[100%] h-[7%] mt-1">

           <div className="flex items-center pl-4 text-gray-400">
                <BsHash /> 
                <p className=" font-bold">tailwind-css</p>
            </div>

            <div className="flex items-center pr-4 gap-2">
                <form>
                    <div className="relative">
                    <input
                        type="search"
                        className="w-full pl-8 py-1 rounded-lg 
                        focus:outline-none focus:shadow-outline-blue
                        focus:border-blue-300
                        bg-gray-600"
                    />
                    <label htmlFor="search" className="absolute top-0 right-0 mt-1 mr-4 ">
                    <FiSearch className="text-gray-500  hover:text-pink-500" />
                    </label>
                    </div>
                </form>

                <FiBell size="20" className="text-gray-500 hover:text-pink-500" />
                <FiUser size="20" className="text-gray-500 hover:text-pink-500" />
            </div>

            
        </div>
    );

};

const CenterText = () => {
    return (
        <div className="ml-5">
            <Post
            name='Ada'
            timestamp='one week ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`}
            />
            <Post name='Leon' timestamp='one week ago' text={`Lorem ipsum dolor. `} />
            <Post name='Jill' timestamp='5 days ago' text={`Lorem.`} />
            <Post
            name='Ellie'
            timestamp='4 days ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
            />
            <Post
            name='Chris'
            timestamp='4 days ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`}
            />
            <Post
            name='Claire'
            timestamp='2 days ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
            />
            <Post
            name='Albert'
            timestamp='22 hours ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 🍌 `}
            />
            <Post
            name='Rebecca'
            timestamp='3 hours ago'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consecter adipisicing elit.`}
            />
            <Post
            name='H.U.N.K'
            timestamp='Just now'
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lipsum dolor sit amet consectetur
            adipisicing elit. Lo ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`}
            />
            <Post
            name='H.U.N.K'
            timestamp='Just now'
            text={`Lorem ipsum dolor lit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit ang elit.`}
            />
            <Post
            name='H.U.N.K'
            timestamp='Just now'
            text={`Lorem ipsum dolor ssectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adiolor sit amet consecter adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`}
            />
            <Post
            name='H.U.N.K'
            timestamp='Just now'
            text={`Lorem ipsum dolor sit amet consectetur adipig elit. Lorem ipsum dolor sit
            amet consectetur adipis Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectedipisicing elit.`}
            />
        </div>
    );
};

const Post = ({ name, timestamp, text }) => {

    const seed = Math.round(Math.random() * 100);
    return (
      <div className="grid grid-cols-chat items-center pt-3 mr-[15px]">
        <div className=" w-[100%] h-[100%] flex items-center justify-center content-center">
          <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className=' h-[70px] w-[70px] rounded-full rounded-lg inline bg-white  ' />
        </div>
  
        <div>
          <p className = "text-white font-bold">
            {name}
            <small className='text-gray-500'>  {timestamp}</small>
          </p>
          <p className='text-white'>{text}</p>
        </div>
      </div>
    );
  };


const BottomNavigation = () => {
    return (
        <div className="fixed bottom-[0.5rem] left-[17rem] right-[1rem]
                        bg-gray-600
                        z-10
                        pt-1 pb-[0.40rem] pl-1
                        ml-2 mr-2
                        rounded-md
                        flex" >
            <FiPlus className="text-gray-600 bg-green-600 rounded-xl mt-[4px] ml-1 pl-1 pr-1"/>
            <p className="text-gray-500 ml-4"> Enter message... </p>
        </div>
    );
};

export default ChatBar;