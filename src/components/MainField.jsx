import React, { useState } from 'react';
import { Search, MoreVertical, X, ChevronDown, Bold, Italic, Underline, Image, Paperclip, FileText, Code, MessageSquare, Send, Plus } from 'lucide-react';
import profileimg from "../assets/profileimg.jpg";
import { CircleMinus } from 'lucide-react';
import {CirclePlus} from 'lucide-react';
import {Clock3} from 'lucide-react';
import {CircleAlert} from 'lucide-react';
import { RotateCcw } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Ellipsis } from 'lucide-react';


const scrollHide = "overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";
const ticketViews = [
  { name: 'My Tickets', count: 9, active: true },
  { name: 'Past Due', count: 4 },
  { name: 'High Priority', count: 11 },
  { name: 'Unassigned', count: 98 },
  { name: 'All Tickets', count: 2192 }
];

const tickets = [
  {
    id: 'APPS-216',
    title: 'Soluta quam velit',
    status: 'To Do',
    date: 'Jun 2',
    priority: 'high',
    hasTime: true,
    hasAlert: true,
    assignees: 2
  },
  {
    id: 'OPS-102',
    title: 'Laudantium neque veritatis',
    status: 'To Do',
    date: 'Jun 2',
    priority: 'medium',
    hasAlert: true,
    assignees: 2,
    selected: true
  },
  {
    id: 'APPS-216',
    title: 'Molestiae saepe illum',
    status: 'To Do',
    date: 'Jun 1',
    priority: 'low',
    assignees: 1
  },
  {
    id: 'APPS-216',
    title: 'Dignissimos maiores porro',
    status: 'To Do',
    date: 'May 31',
    priority: 'low',
    assignees: 1
  },
  {
    id: 'APPS-216',
    title: 'Nihil porro repudiandae',
    status: 'To Do',
    date: 'May 31',
    priority: 'low',
    assignees: 1
  },
  {
    id: 'APPS-216',
    title: 'Aspernatur cumque ipsum',
    status: 'To Do',
    date: 'May 30',
    priority: 'low',
    assignees: 1
  },
  {
    id: 'APPS-216',
    title: 'Culpa quos aliquam',
    status: 'To Do',
    date: 'May 30',
    priority: 'low',
    assignees: 1
  },
  {
    id: 'APPS-216',
    title: 'Atque incidunt autem',
    status: 'To Do',
    date: 'May 30',
    priority: 'low',
    assignees: 1
  },
  {
    id: 'APPS-216',
    title: 'Ut sapiente sunt',
    status: 'To Do',
    date: 'May 29',
    priority: 'low',
    assignees: 1
  }
];

const TicketViewsSidebar = ({ views, activeView, onViewChange }) => {
  return (
    <div className="w-44 bg-gray-50 border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-4">
        <ChevronDown className="w-4 h-4 text-gray-600" />
        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Ticket Views</span>
      </div>
      <div className="space-y-1">
        {views.map((view, index) => (
          <button
            key={index}
            onClick={() => onViewChange(view.name)}
            className={`w-full flex items-center justify-between px-2 py-2 rounded-lg text-sm font-medium transition-colors ${
              view.active
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span>{view.name}</span>
            <span className={`text-xs  ${view.active ? 'text-blue-100 bg-blue-900 py-2 px-3 rounded-lg' : 'text-gray-500'}`}>
              {view.count.toLocaleString()}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-6 space-y-2">
        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">Live Chats</span>
        </button>
        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wider">Boards</span>
        </button>
      </div>
    </div>
  );
};

const TicketList = ({ tickets, selectedTicket, onTicketSelect, isSlideLeft, onSlideLeft }) => {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`w-64 bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out z-10 ${
      isSlideLeft ? '-ml-44' : 'ml-0' // Slide left by the width of the TicketViewsSidebar
    }`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <button 
              onClick={onSlideLeft}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <span className="font-semibold text-gray-900">My Tickets</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <button
  onClick={() => setShowMenu(prev => !prev)}
  className="p-1 hover:bg-gray-100 rounded transition-colors"
>
  <svg
    className="w-5 h-5 text-gray-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="15" y2="12" />
    <line x1="3" y1="18" x2="18" y2="18" />
  </svg>
</button>
{showMenu && (
  <div className="absolute h-90 p-3 w-80 left-26 right-4 top-[70px] bg-white border border-gray-200 rounded-lg shadow-md z-20 overflow-hidden">
    <div className=''>
        <span className='flex h-5 mb-4 mt-3 items-center justify-between'>
        <p className='text-md  items-center '>Ticket type</p>.
        <span className="flex h-full items-center gap-1  text-gray-500">
            <p>Reset</p>
        <RotateCcw className="w-3 h-3 text-gray-500 cursor-pointer" />
        </span>
        </span>
    {["Project", "Type", "Status", "Assignee"].map(item => (
      
      <div
        key={item}
        className="flex items-center gap-3 px-3 py-2 text-sm mb-2 text-gray-700 border rounded-lg border-gray-300 hover:bg-gray-50 cursor-pointer"
      >
      
        <span className='w-full flex justify-between items-center'>
            <span  >{item}</span>
          <ChevronDown className="w-4 h-4 text-black shrink-0" />
          </span>
        
      </div>
    ))}
  </div>
    <div className="px-3 py-2 text-sm text-blue-600 hover:bg-gray-50 cursor-pointer">
      More
    </div>
  </div>
)}

        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search tickets"
            className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className={`flex-1 ${scrollHide}`}>
        {tickets.map((ticket, index) => (
          <div
            key={index}
            onClick={() => onTicketSelect(ticket)}
            className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
              ticket.selected ? 'bg-blue-50 border-l-4 border-l-blue-500' : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-gray-900 text-sm">{ticket.title}</h3>
              <span className="text-xs text-gray-500 ml-2">{ticket.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <span className="text-xs font-medium text-gray-600">{ticket.id}</span>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
                {ticket.status}
              </span>
              <div className="flex -space-x-1 ml-auto">
                {[...Array(ticket.assignees)].map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-pink-600 border-2 border-white" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TicketDetail = ({ ticket, expanded, onToggleExpand }) => {
  const [tab, setTab] = useState("public");

  return (
    <section
      className={`
        bg-gray-50 flex flex-col
        border-r border-gray-200
        transition-all duration-300
        flex-1 min-w-0
        ${expanded ? "fixed inset-0 z-50" : "relative"}
      `}
    >
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="px-3 py-4 flex justify-between items-start">
          <div className='flex w-full justify-between gap-3'>
            <h1 className="text-lg font-semibold text-gray-900 truncate">
              {ticket.title}
            </h1>
            <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500 cursor-pointer" />
                <span className="flex items-center gap-1 text-xs text-gray-500">
                <Eye className="w-4 h-4 text-gray-500 cursor-pointer" />
                <p>2</p>
                </span>
                <Ellipsis className="w-4 h-4 text-gray-500 cursor-pointer" />
                <div className="flex -space-x-1 ml-auto">
             <img src={profileimg} alt="Profile" className="w-6 h-6 rounded-full object-cover" />
               <img src={profileimg} alt="Profile" className="w-6 h-6 rounded-full object-cover" />
                 <img src={profileimg} alt="Profile" className="w-6 h-6 rounded-full object-cover" />
              </div>
                </div>
          </div>

          <div className="flex items-center gap-3">
          
            {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm whitespace-nowrap">
              To Do <ChevronDown className="inline w-4 h-4 ml-1" />
            </button> */}
           
          </div>
        </div>
      </header>

      <div className={`flex-1 ${scrollHide}`}>
        <div className="   m-auto w-[96%] bg-white rounded-lg shadow-md border-gray-200">
          <div className="flex mt-4 px-2 w-full gap-6 ">
            {["public", "private"].map((type) => (
              <button
                key={type}
                onClick={() => setTab(type)}
                className={`pb-2 text-sm font-medium border-b-2 ${
                  tab === type
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500"
                }`}
              >
                {type === "public" ? "Public Reply" : "Private Comment"}
              </button>
            ))}
          </div>

          <div className="bg-white w-full py-2 rounded-lg">
            <div className="flex justify-between mt-[-8px] gap-2 px-2 items-center py-2 border border-gray-200">
                <div className="flex items-center gap-2">
                <p>To:</p>
                <div className="flex px-2 rounded-2xl bg-white items-center gap-2 mt-1">
                    <img src={profileimg} alt="Profile" className="w-6 h-6 rounded-full" />
                    <span className="text-sm text-gray-900">Allison Westervelt awestervelt@gmail.com</span>
                    <X className="w-4 h-4 text-gray-400 ml-auto cursor-pointer" />
              </div>
                    </div>
                     <p className='text-gray-500'>Cc</p>
                </div>
            <textarea
              placeholder="Add a reply..."
              className="w-full px-4 py-3 border-none outline-none  text-sm resize-none focus:outline-none"
              rows={3}
            />
            <div className="flex justify-between items-center px-4 py-2">
              <div className="flex gap-1">
                {[Bold, Italic, Underline, Image, Paperclip, FileText, Code].map((Icon, i) => (
                  <button key={i} className="p-1.5 hover:bg-gray-200 rounded">
                    <Icon className="w-4 h-4 text-gray-600" />
                  </button>
                ))}
              </div>
              <button className="p-2 hover:bg-gray-200 rounded">
                <Send className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="py-8 px-4 space-y-6">
          {[1, 2].map((msg) => (
            <div key={msg} className="bg-white shadow w-full rounded-lg p-4">
              <div className="flex gap-3">
                <img src={profileimg} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-900">Allie Harmon</span>
                  <div className="flex flex-col gap-2 justify-center items-center">
  <span className="text-xs text-gray-500">Feb 9, 2022</span>
  <ChevronDown className="w-4 h-4  rounded-md bg-gray-200 text-sm text-gray-600 cursor-pointer" />
</div>

                  </div>
                  <p className="text-xs mt-[-px] text-gray-500">To Danny Amacher (danny@capacity.com) </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Sample message content for the ticket thread.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const RightSidebar = () => {
  return (
    <div className={`w-72 bg-white border-l border-gray-200 p-6 shrink-0 ${scrollHide}`}>
      <div className="space-y-6">
        <div className="flex items-center justify-between mt-[-6    px]">
         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm whitespace-nowrap">
              To Do <ChevronDown className="inline w-4 h-4 ml-1" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <X className="w-5 h-5 text-gray-500" />
                </button>
         </div>
         
        {/* Priority */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Priority
          </label>
          <div className="flex items-center justify-between px-3 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-gray-900">Medium</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Assigned To */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Assigned To
            </label>
            <button className="text-xs text-blue-500 hover:text-blue-600">Assign to me</button>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
            <span className="text-sm text-gray-900 flex-1">Allie Harmon</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Project */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Project
          </label>
          <div className="flex items-center justify-between px-3 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-900">Administrative</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Ticket Type */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Ticket Type
          </label>
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-sm text-gray-900 flex-1">Task</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Due Date
          </label>
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <span className="text-sm text-gray-400 flex-1">mm/dd/yyyy</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Reporter */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Reporter
          </label>
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
            <span className="text-sm text-gray-900 flex-1">Allie Harmon</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Tags
          </label>
          <button className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600">
            <span>Add Tag</span>
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded">
            <span>Tasks</span>
            <ChevronDown className="w-4 h-4 text-gray-400 transform rotate-270" />
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded">
            <span>Collected Fields</span>
            <ChevronDown className="w-4 h-4 text-gray-400 transform rotate-270" />
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded">
            <span>Linked Tickets</span>
            <span className="flex items-center gap-2">
              <span className="text-gray-500">2</span>
              <ChevronDown className="w-4 h-4 text-gray-400 transform rotate-270" />
            </span>
          </button>
          <button className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wider hover:bg-gray-50 rounded">
            <span>History</span>
            <ChevronDown className="w-4 h-4 text-gray-400 transform rotate-270" />
          </button>
        </div>
      </div>
    </div>
  );
};

const MainField= () => {
  const [activeView, setActiveView] = useState('My Tickets');
  const [selectedTicket, setSelectedTicket] = useState(tickets[1]);
  const [ticketListSlideLeft, setTicketListSlideLeft] = useState(false);
  const [ticketDetailExpanded, setTicketDetailExpanded] = useState(false);

  const handleTicketListSlideLeft = () => {
    const newSlideState = !ticketListSlideLeft;
    setTicketListSlideLeft(newSlideState);
    
  };

  const handleTicketDetailToggle = () => {
    setTicketDetailExpanded(!ticketDetailExpanded);
  };

  return (
    <div className="flex h-full w-200 bg-white w-full relative">
      <TicketViewsSidebar 
        views={ticketViews} 
        activeView={activeView}
        onViewChange={setActiveView}
      />
      <TicketList 
        tickets={tickets}
        selectedTicket={selectedTicket}
        onTicketSelect={setSelectedTicket}
        isSlideLeft={ticketListSlideLeft}
        onSlideLeft={handleTicketListSlideLeft}
      />
      <TicketDetail 
        ticket={selectedTicket}
        isExpanded={ticketDetailExpanded}
        onToggleExpand={handleTicketDetailToggle}
        isSlideLeft={ticketListSlideLeft}
      />
      <RightSidebar />
    </div>
  );
};

export default MainField;
