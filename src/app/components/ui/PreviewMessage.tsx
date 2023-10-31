import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface PreviewMessageProps {
  selectPreviewMessage: {
    name: string;
    phone: string;
    lastMessage: string;
    time: string;
  };
  setSelectPreviewMessage: (v: {
    name: string;
    phone: string;
    lastMessage: string;
    time: string;
  }) => void;
  avatar: string;
  name: string;
  phone: string;
  time: string;
  lastMessage: string;
}

const PreviewMessage = ({
  selectPreviewMessage,
  setSelectPreviewMessage,
  avatar,
  name,
  phone,
  time,
  lastMessage,
}: PreviewMessageProps) => {
  return (
    <button
      onClick={() =>
        setSelectPreviewMessage({ name, phone, lastMessage, time })
      }
      className={`h-20 w-full pr-2 hover:bg-zinc-800 transition-colors p-2 rounded flex gap-2 ${
        selectPreviewMessage.name == name && "bg-zinc-800"
      } `}>
      <Avatar>
        <AvatarImage className="object-cover" src={avatar} alt={name} />
      </Avatar>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <p className="text-base">{name}</p>
          <p className="font-light text-xs text-zinc-400">{time}</p>
        </div>
        <div>
          <p className="text-sm text-left text-zinc-500 text-ellipsis whitespace-nowrap overflow-hidden">
            {lastMessage}
          </p>
        </div>
      </div>
    </button>
  );
};

export default PreviewMessage;
