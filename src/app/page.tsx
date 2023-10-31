"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Search, SendHorizontal, X } from "lucide-react";
import { useState } from "react";
import Message from "./components/Message";
import PreviewMessage from "./components/ui/PreviewMessage";

const friendList = [
  {
    id: 1,
    name: "Matheus",
    phone: "(48) 92107-0136",
    time: "18:00",
    lastMessage: "hello, how are you?",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    name: "Anna",
    phone: "(67) 93041-8856",
    time: "16:30",
    lastMessage: "Hi there!",
    avatar:
      "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "John",
    phone: "(97) 93788-2152",
    time: "20:15",
    lastMessage: "What's up?",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Linda",
    phone: "(17) 93715-5431",
    time: "14:45",
    lastMessage: "How's it going?",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1976&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Michael",
    phone: "(18) 92476-1656",
    time: "12:20",
    lastMessage: "Good morning!",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=1998&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Sophie",
    phone: "(11) 93723-1782",
    time: "21:05",
    lastMessage: "Hey!",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "David",
    phone: "(14) 92023-6461",
    time: "19:30",
    lastMessage: "Long time no see!",
    avatar:
      "https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Emily",
    phone: "(18) 93145-0211",
    time: "17:55",
    lastMessage: "What's new?",
    avatar:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&q=80&w=2076&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Daniel",
    phone: "(12) 92954-5785",
    time: "22:10",
    lastMessage: "How are you doing?",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Bibi",
    phone: "(16) 92336-7478",
    time: "15:40",
    lastMessage: "Good to see you!",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Oliver",
    phone: "(17) 93747-1224",
    time: "09:25",
    lastMessage: "Hey there!",
    avatar:
      "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Emma",
    phone: "(18) 93656-8685",
    time: "11:55",
    lastMessage: "How's it going?",
    avatar:
      "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?auto=format&fit=crop&q=80&w=2053&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "William",
    phone: "(16) 93686-3298",
    time: "14:15",
    lastMessage: "What's new?",
    avatar:
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Ava",
    phone: "(16) 92861-3287",
    time: "10:30",
    lastMessage: "Hi!",
    avatar:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "James",
    phone: "(11) 92214-2464",
    time: "22:45",
    lastMessage: "Good evening!",
    avatar:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  const [selectPreviewMessage, setSelectPreviewMessage] = useState<{
    name: string;
    phone: string;
    lastMessage: string;
    time: string;
  }>({ name: "", phone: "", lastMessage: "", time: "" });

  const [sentMessages, setSentMessages] = useState<
    { text: string; time: string }[]
  >([]);
  const [messageValue, setMessageValue] = useState("");

  const handleSendMessage = () => {
    const sendTime = new Date();

    setSentMessages((prev) => [
      ...prev,
      { text: messageValue, time: sendTime.toString() },
    ]);

    setMessageValue("");
  };

  return (
    <main className="h-screen w-full p-4 bg-zinc-950 text-zinc-200 flex items-center justify-center">
      <div className="w-full max-w-[1000px] bg-zinc-900 rounded-lg border border-zinc-600 h-[800px] p-8">
        <header>
          <h1 className="text-lg font-medium">Conversations</h1>
        </header>

        <div className="grid grid-cols-[300px_1fr] gap-4 mt-4">
          <div className="flex flex-col overflow-y-scroll h-[700px] scrollbar gap-1 pr-2">
            {friendList.map((item) => (
              <PreviewMessage
                key={item.id}
                selectPreviewMessage={selectPreviewMessage}
                setSelectPreviewMessage={setSelectPreviewMessage}
                avatar={item.avatar}
                phone={item.phone}
                name={item.name}
                time={item.time}
                lastMessage={item.lastMessage}
              />
            ))}
          </div>

          <div>
            {selectPreviewMessage.name !== "" && (
              <>
                <header className="flex  justify-between">
                  <div>
                    <p className="text-base">{selectPreviewMessage.name}</p>
                    <p className="text-sm text-zinc-500">
                      {selectPreviewMessage.phone}
                    </p>
                  </div>

                  <Button
                    onClick={() =>
                      setSelectPreviewMessage({
                        name: "",
                        phone: "",
                        lastMessage: "",
                        time: "",
                      })
                    }
                    size="icon"
                    variant="outline">
                    <X size={24} />
                  </Button>
                </header>
                <div className="w-full h-[1px] bg-zinc-500 mt-2 mb-4" />
              </>
            )}

            <div
              className={`w-full  bg-zinc-800 ${
                selectPreviewMessage.name == "" ? "h-[700px]" : "h-[630px]"
              }  pt-4 pl-4 pr-2 gap-4 grid-rows-[490px_1fr] rounded grid`}>
              {selectPreviewMessage.name !== "" ? (
                <>
                  {" "}
                  <div className="flex-1 flex flex-col  ">
                    <div className="flex items-center justify-center mb-5  ">
                      <p className="px-2 py-1 rounded text-center  bg-zinc-900">
                        Today
                      </p>
                    </div>

                    <div className="space mt-4 pr-2 overflow-y-scroll scrollbar">
                      <div className="flex items-center justify-start">
                        <div className="p-2 rounded bg-zinc-300 min-w-[200px] mb-4 ">
                          <p className=" text-zinc-950">
                            {selectPreviewMessage.lastMessage}
                          </p>

                          <p className="text-xs font-light text-zinc-800 text-right">
                            {selectPreviewMessage.time}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {sentMessages.map((message, index) => (
                          <Message
                            key={index}
                            text={message.text}
                            time={message.time}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-zinc-900 rounded h-[5.625rem] py-2 flex gap-2 pr-2">
                    <Textarea
                      value={messageValue}
                      onChange={(e) => setMessageValue(e.target.value)}
                      className="resize-none scrollbar h-16 w-full   text-sm border-none"
                      placeholder="type your message"
                    />

                    <Button
                      onClick={handleSendMessage}
                      className={`h-7 w-7 p-0 mt-2   transition-opacity ${
                        messageValue.length == 0 && "opacity-0"
                      }`}
                      size="icon"
                      variant="outline">
                      <SendHorizontal size={18} />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center mt-10 flex-col  gap-4">
                  <Search size={200} />

                  <div className="text-center">
                    <h3 className="text-lg text-zinc-200">
                      Select a conversation!
                    </h3>
                    <p className="text-sm text-zinc-500 ">
                      When you select a person to chat with, the Message <br />
                      history will appear here.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
