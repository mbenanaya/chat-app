<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\User;
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
        $messages = empty($receiverId) ? [] : $this->chat->getUserMessages((int) $request->user()->id, (int) $receiverId);
        $recentMessages = $this->chat->getRecentUsersWithMessages($userId);

        return Inertia::render('Chat', [
            'messages'       => $messages,
            'recentMessages' => $recentMessages,
            'receiver'       => User::find($receiverId),
        ]);

    }

    public function store(Request $request, ?int $receiverId = null)
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
            return Redirect::route('chat.index', $receiverId);
        }
    }

}
