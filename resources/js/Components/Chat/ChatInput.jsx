export default function ChatInput() {
	return(
		<div className="bg-gray-100 fixed bottom-0 w-full pl-4">
            <textarea className="w-full bg-gray-100 border-0 outline-0 hover:border-0 focus:border-0 focus:outline-none shadow-none focus:ring-0 focus:outline pt-3 h-12 oveflow-y-auto font-light pl-4" placeholder="Write a message"></textarea>
        </div>
	)
}