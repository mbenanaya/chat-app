import { BsFillChatLeftFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { BsFillCaretUpFill } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'

export default function ChatMessages() {
	return(
		<>
			{/* Chats */}
            <div className="receive_chat relative flex justify-start">
                <div className="px-5 py-3 text-sm max-w-[80%] rounded mb-2 bg-violet-400 text-white">
                <BsFillCaretUpFill className="text-violet-400 -top-2 absolute" />
                    <p>I got two tickets to go to the stadium fjhfhakjfhaskfjaskcjaskl emfmkldmwqkldmqwkl fjwenfewkjn wfwekfmld efjqodk efqdqf ef qdqd qwdqwdqw</p>
                </div>
            </div>
            <div className="receive_chat flex justify-start">
                <div className="px-5 py-3 text-sm max-w-[80%] rounded mb-2 bg-violet-400 text-white">
                    <p>I got two tickets to go to the stadium fjhfhakjfhaskfjaskcjaskl emfmkldmwqkldmqwkl fjwenfewkjn wfwekfmld efjqodk efqdqf ef qdqd qwdqwdqw</p>
                </div>
            </div>

            {/* Send Chat */}
            <div className="send_chat flex justify-end">
                <div className="px-5 py-3 text-sm max-w-[80%] rounded mb-2 bg-violet-200 text-slate-500">
                    <p>I got two tickets to go to the stadium fjhfhakjfhaskfjaskcjaskl emfmkldmwqkldmqwkl fjwenfewkjn wfwekfmld efjqodk efqdqf ef qdqd qwdqwdqw</p>
                </div>
            </div>
            <div className="send_chat relative flex justify-end">
                <div className="px-5 py-3 text-sm max-w-[80%] rounded mb-2 bg-violet-200 text-slate-500">
                    <BsFillCaretDownFill className="text-violet-200 bottom-0 right-4 absolute" />
                    <p>I got two tickets to go to the stadium fjhfhakjfhaskfjaskcjaskl emfmkldmwqkldmqwkl fjwenfewkjn wfwekfmld efjqodk efqdqf ef qdqd qwdqwdqw</p>
                </div>
            </div>
		</>
	)
}