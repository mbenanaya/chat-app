import Admin from '../../Pages/admin.png'
import { BsFillChatLeftFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { BsFillCaretUpFill } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'

export default function ChatSidebar({ users }) {
    return (
    	<>
    		<div className="search_box h-10 text-slate-300">
                <div className="flex justify-between items-center px-5 pb-1 border-r border-slate-100">
                    <form className="flex items-center">
                        <BsSearch className="text-gray-500" />
                        <input type="search" placeholder="Search..." className="text-gray-300 border-0 hover:border-0 focus:border-0 focus:outline-none shadow-none focus:ring-0" />
                    </form>
                    <div>
                        <button>
                            <BsFillChatLeftFill className="text-black" />
                        </button>
                    </div>
                </div>
                <div className="user_list oveflow-y-auto h-screen">


                    {users.map((user, index) => (
                        <div key={index} className="flex transition px-5 py-3 hover:bg-slate-100 hover:cursor-pointer">
                            <div className="pr-4">
                                <img src={Admin} className="rounded-full" width="50" />
                            </div>

                            <div>
                                <h3 className="text-violet-500 text-md">
                                    {user.name.length > 0 ? user.name : 'N/A'}
                                </h3>
                                <p className="text-sm text-gray-500 font-light overflow-hidden h-5">
                                    {user.message}
                                </p>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
    	</>
    );
}