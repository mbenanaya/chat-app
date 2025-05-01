import { BsFillChatLeftFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { BsFillCaretUpFill } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'

export default function ChatMessages({ messages, auth_id }) {
    const isReceivedMessage = (message) => {
        return message.receiver_id === auth_id;
    };
    return (
        <>
            {(messages || []).map((message, index) => (
                <div key={index}>
                    <div
                        className={`${
                            isReceivedMessage(message)
                                ? "receive-chat justify-start"
                                : "send-chat justify-end"
                        } relative flex`}
                    >
                        <div
                            className={`mb-2 max-w-[80%] rounded ${
                                isReceivedMessage(message)
                                    ? "bg-violet-400"
                                    : "bg-violet-200"
                            } px-5 py-2 text-sm ${
                                isReceivedMessage(message)
                                    ? "text-white"
                                    : "text-slate-500"
                            }`}
                        >
                            <p>{message?.message}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
