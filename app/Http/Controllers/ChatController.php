<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Repositories\ChatRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ChatController extends Controller
{

    public function __construct(private ChatRepository $chat)
    {
        $this->chat = $chat;
    }

    public function index(Request $request, ?int $receiverId = null)
    {
        $userId = $request->user()->id;
        $messages = empty($receiverId) ? [] : $this->chat->getUserMessages($userId, $receiverId);

        $recentMessages = $this->chat->getRecentUsersWithMessages($userId);

        return Inertia::render('Chat', [
            'messages'       => $messages,
            'recentMessages' => $recentMessages,
        ]);
        
        // dd($recentMessages);
    }

    public function store(Request $request, int $receiverId)
    {
        $userId = $request->user()->id;
        $request->validate([
            'message' => 'required|string',
        ]);

        if (empty($receiverId)) {
            return;
        }

        try {
            $message = $this->sendMessage([
                'sender_id'   => $userId,
                'receiver_id' => $receiverId,
                'message'     => $request->message,
            ]);

            event(new MessageSent($message));

            return Redirect::route('chat.index', $receiverId);
        } catch (\Throwable $th) {
            throw new Throwable("Error " . $th);
        }

        // $messages = empty($receiverId) ? [] : $this->chat->getUserMessages($userId, $receiverId);

        // return Inertia::render('Chat/Chat', [
        //     'messages' => $messages,
        // ]);
    }
    
}
