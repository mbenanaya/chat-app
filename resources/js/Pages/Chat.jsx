import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ChatSidebar from "@/Components/Chat/ChatSidebar";
import ChatUserInfoHeader from "@/Components/Chat/ChatUserInfoHeader";
import ChatMessages from "@/Components/Chat/ChatMessages";
import ChatInput from "@/Components/Chat/ChatInput";

import { Head } from "@inertiajs/react";
import { BsFillChatLeftFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function Chat({ auth, messages, recentMessages, receiver }) {
    console.log(receiver);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Chat" />

            <div className="">
                <div className="messenger bg-gray-900 p-4 h-screen overflow-hidden">
                    <div className="flex">
                        <div className="basis-2/6 py-3 bg-gray-900 border-r border-gray-300">
                            <ChatSidebar users={recentMessages} />
                        </div>
                        <div className="basis-4/6">
                            {receiver?.id ? (
                                <>
                                    <ChatUserInfoHeader receiver={receiver} />
                                    <div className="messanger mt-4">
                                        <div className="px-4">
                                            <ChatMessages
                                                messages={messages}
                                                auth_id={auth?.user?.id}
                                            />
                                        </div>

                                        <ChatInput receiver={receiver} />
                                    </div>
                                </>
                            ) : (
                                <div className="flex justify-center items-center bg-slate-100 h-screen">
                                    <p className="font-bold text-3xl text-gray-500">
                                        Please select a User to start
                                        chatting...
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
