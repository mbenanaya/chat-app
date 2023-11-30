import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ChatSidebar from '@/Components/Chat/ChatSidebar';
import ChatUserInfoHeader from '@/Components/Chat/ChatUserInfoHeader';
import ChatMessages from '@/Components/Chat/ChatMessages';
import ChatInput from '@/Components/Chat/ChatInput';

import { Head } from '@inertiajs/react';
import { BsFillChatLeftFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { BsFillCaretUpFill } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'

export default function Chat({ auth, messages, recentMessages }) {
    console.log(recentMessages)
    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Chat" />

            <div className="">
                <div className="messenger bg-white p-4 h-screen overflow-hidden">
                    <div className="flex">
                        <div className="basis-2/6 py-3 bg-white border-r border-gray-300">
                            <ChatSidebar users={recentMessages} />
                        </div>
                        <div className="basis-4/6">
                            <div className="flex justify-center items-center text-3xl font-bold h-screen text-gray-500">
                                Please select user to start chating...
                            </div>
                            {/*<ChatUserInfoHeader />
                            <div className="messenger mt-4 pt-4 h-screen bg-gray-200">
                                <div className="px-4">
                                    <ChatMessages />
                                </div>
                                <ChatInput />
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
