import Admin from '../../Pages/admin.png'
import { BsFillChatLeftFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { BsFillCaretUpFill } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'

export default function ChatUserInfoHeader() {
    return (
        <div className="user_info_header bg-white px-5 py-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={Admin} className="rounded-full" width="40" />
                <h3 className="text-gray-500 text-md pl-4">Mouhcine BEN-ANAYA</h3>
                </div>
                <div className="flex justify-evenly items-center spaxe-x-4 p-2" >
                    <div className="p-2 text-violet-500"><BsFillChatLeftFill size={20} /></div>
                    <div className="p-2 text-gray-300"><BsFillCameraVideoFill size={20} /></div>
                    <div className="p-2 text-gray-300"><BsTelephoneFill size={20} /></div>
                </div>
            </div>
        </div>
    );
}
