import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { CircleQuestionMark } from "lucide-react";
import { Gift } from "lucide-react";
import profileimg from "../../assets/profileimg.jpg";
import cap from "../../assets/capacity.webp";
import {Search} from "lucide-react";

const TopLayout = () => {
  return (
    <div className="w-full h-15 bg-[#13265c] text-white flex items-center justify-between px-[-30px]">
      <div className="w-[98%] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
              <img src={cap} alt="Capacity" className="w-8 h-8 rounded" />
        <h1 className="">Helpdesk</h1>    
        </div>
    <div className="flex justify-center relative w-[33%] ">
         <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-white" />
  <input
    type="text"
    className="bg-[#152238] w-full h-10 px-10 rounded text-white placeholder-gray-400"
    placeholder="Search capacity..."
  />
 
</div>

        <div className="flex w-[80%]justify-center items-center space-x-4">
           <div className="flex bg-blue-500 rounded-md overflow-hidden">
  {/* Left button */}
  <button className="px-5 py-2 border-r border-white text-white flex items-center justify-center">
    Create
  </button>

  {/* Right button */}
  <button className="px-3 py-2 bg-blue-500 flex items-center justify-center text-white">
    <HiChevronDown className=" text-xl" />
  </button>
</div>
<div className="flex items-center h-10 ">
<CircleQuestionMark className="text-white text-lg"/>
</div>
<div className="flex items-center h-10 ">
<Gift className="text-white text-lg"/>
</div>
<div className="flex items-center h-10 ">
 <img src={profileimg} alt="Profile" className="w-7 h-7 rounded-full object-cover" />
 </div>
            </div>
      </div>
    </div>
  );
};

export default TopLayout;
