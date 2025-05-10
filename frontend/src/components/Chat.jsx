import { useState } from "react";
import bg from "../assets/images/bg.png";
import arrow from "../assets/images/arrow.png";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [isChat, setIsChat] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;
    setMessages((prevMessages) => [...prevMessages, userInput]);
    setUserInput(""); // Xóa nội dung trong ô nhập liệu
  };

  return (
    <>
      {isChat ? (
        <div className="w-[60%] h-[85%] bg-[#f2f2f2] rounded-xl px-12 py-8 flex flex-col justify-between items-center">
          <div
            className="w-[90%] px-10 outline-none border-0 overflow-hidden custom-scrollbar-navbar flex justify-end"
            id="messages"
            style={{
              overflowY: "auto",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className="py-2 px-4 mb-2 bg-gray-200 rounded-lg text-left text-black"
              >
                {message}
              </div>
            ))}
          </div>
          <div className="w-[90%] h-[20%] flex flex-row space-x-1 items-end rounded-2xl shadow-lg border-[1px] border-gray-300 p-2">
            <textarea
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  setIsChat(true);
                  handleSendMessage();
                }
              }}
              id="user-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Hỏi bất kỳ điều gì"
              className="font-normal text-[14px] text-primary-500 h-full w-full px-4 rounded-l-2xl bg-primary-600 no-focus focus:outline-none focus:ring-0 overflow-auto resize-none custom-scrollbar-navbar"
            />
            <button
              id="send-btn"
              onClick={() => {
                setIsChat(true);
                handleSendMessage();
              }}
              className="w-[30px] h-[30px] rounded-[999px] bg-primary-400 aspect-square cursor-pointer"
            >
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className="w-[60%] h-[80%] bg-[#f2f2f2] rounded-xl flex flex-col justify-end items-center p-12 space-y-10"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-2xl text-[#db0000] font-semibold">
            Bạn có câu hỏi gì về luật thuế ?
          </h1>
          <div className="w-[80%] h-[20%] flex flex-row space-x-1 items-end rounded-2xl shadow-lg border-[1px] border-gray-300 p-2">
            <textarea
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  setIsChat(true);
                  handleSendMessage();
                }
              }}
              id="user-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Hỏi bất kỳ điều gì"
              className="font-normal text-[14px] text-primary-500 h-full w-full px-4 rounded-l-2xl bg-primary-600 no-focus focus:outline-none focus:ring-0 overflow-auto resize-none custom-scrollbar-navbar"
            />
            <button
              id="send-btn"
              onClick={() => {
                setIsChat(true);
                handleSendMessage();
              }}
              className="w-[30px] h-[30px] rounded-[999px] bg-primary-400 aspect-square cursor-pointer"
            >
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
