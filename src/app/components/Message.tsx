import { format } from "date-fns";

interface MessageProps {
  text: string;
  time: string;
}

const Message = ({ text, time }: MessageProps) => {
  const formatedTime = format(new Date(time), "kk:mm");

  return (
    <div className="flex items-center justify-end h-full ">
      <div className="p-2 rounded bg-zinc-950 min-w-[200px] max-w-[290px]  ">
        <p className=" text-zinc-200 break-words  ">{text}</p>

        <p className="text-xs font-light text-zinc-400 text-right">
          {formatedTime}
        </p>
      </div>
    </div>
  );
};

export default Message;
