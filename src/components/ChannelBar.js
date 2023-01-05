import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { BsHash } from 'react-icons/bs';
import { useState } from "react";

const ChannelBar = () => {
    return (
        <div className="fixed top-0 left-16 h-screen m-0
                        flex flex-col w-[12rem] bg-gray-800">

            <ChannelBarTitle title="Channels" />

            <ChannelBarChannel channel="general" name1="TailWind-css" name2="React" name3="Node"/>
            <ChannelBarChannel channel="random" name1="jit-compilation" name2="purge-files" name3="dark-mode" />
            <ChannelBarChannel channel="memes" name1="variant" name2="plugins" name3="computer-science"/>
            <ChannelBarChannel channel="react" name1="html" name2="js" name3="github"/>

        </div>
    );
};

const ChannelBarTitle = ({ title }) => (
    <div className="channelbar-title" >
        {title}
    </div>
);

const ChannelBarChannel = ({ channel, name1, name2, name3}) => (
    <div className="channelbar-channel">
        <HeaderIcon inactiveIcon={<AiOutlineRight />} activeIcon={<AiOutlineDown />} channel={channel} name1={name1} name2={name2} name3={name3}/>
    </div>
);

const ChannelNames = ({ name }) => (
    <p className="channelbar-name">
        <BsHash className="text-white"/> {name}
    </p>
);

function HeaderIcon({ inactiveIcon, activeIcon, channel, name1, name2, name3 }) {
    const [isActive, setIsActive] = useState(false);
   
    return (
      <div onClick={() => setIsActive(!isActive)} className="inline">
        <FaPlus size="15" className="float-right block mr-2 mt-2"/> 
        {isActive ? activeIcon : inactiveIcon }
        <div  className={isActive ? 'text-blue-500 text-lg inline' : 'inline'}> {channel} </div>
        {isActive && (
            <div>
                <ChannelNames name={name1} />
                <ChannelNames name={name2}  />
                <ChannelNames name={name3}  />

            </div>
        )}
      </div>
    );
};
   




export default ChannelBar;