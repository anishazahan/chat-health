"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineArrowUp,
  AiOutlineCopy,
  AiOutlineDislike,
  AiOutlineEdit,
  AiOutlineLike,
  AiOutlinePaperClip,
} from "react-icons/ai";

export default function ChatSymptomForm() {
  const { register, handleSubmit, reset } = useForm();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      editable: false,
      reply:
        "Thank you for sharing. Based on your symptoms, here’s a possible recommendation.A sore throat and fever might indicate an infection. Consider staying hydrated and resting.",
    },
    {
      id: 2,
      text: "I have been feeling unwell with a sore throat and fever.",
      editable: false,
      reply:
        "A sore throat and fever might indicate an infection. Consider staying hydrated and resting.A sore throat and fever might indicate an infection. Consider staying hydrated and resting.A sore throat and fever might indicate an infection. Consider staying hydrated and resting.",
    },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const onSubmit = (data) => {
    setMessages([
      ...messages,
      { id: messages.length + 1, text: data.symptoms, editable: false, reply: "Processing your symptoms..." },
    ]);
    reset();
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditedText(text);
  };

  const handleSaveEdit = (id) => {
    setMessages(messages.map((msg) => (msg.id === id ? { ...msg, text: editedText, editable: false } : msg)));
    setEditingId(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 mx-auto w-full max-w-[800px] ">
      {/* Messages Section */}
      <div className="w-full space-y-5 mb-4">
        {messages.map((msg) => (
          <div key={msg.id} className="space-y-2 ">
            <div className="flex items-start gap-2 max-w-[500px] ml-auto">
              <button className="text-gray-500 hover:text-black" onClick={() => handleEdit(msg.id, msg.text)}>
                <AiOutlineEdit size={18} />
              </button>
              {editingId === msg.id ? (
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  onBlur={() => handleSaveEdit(msg.id)}
                  autoFocus
                  className="p-3 bg-gray-50 outline-none border border-gray-100 rounded-[24px] text-sm w-full"
                />
              ) : (
                <div className="bg-gray-100 p-4 text-sm rounded-[24px] w-full text-gray-600 relative">
                  <p>{msg.text}</p>
                </div>
              )}
            </div>
            {/* Reply Section */}
            <div className="p-2 text-sm w-full text-gray-600">
              <p>{msg.reply}</p>
              <div className="flex gap-3 mt-3 text-gray-500">
                <button className="hover:text-blue-500">
                  <AiOutlineLike size={18} />
                </button>
                <button className="hover:text-black">
                  <AiOutlineCopy size={18} />
                </button>
                <button className="hover:text-red-500">
                  <AiOutlineDislike size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center max-w-[800px] mx-auto">
        <div className="relative w-full mx-auto">
          <textarea
            {...register("symptoms", { required: true })}
            placeholder="Enter your symptoms here for an efficient & accurate care"
            className="w-full h-[124px] bg-gray-100 text-sm rounded-[24px] p-6 pr-12 focus:outline-none placeholder:text-gray-600"
          ></textarea>
          <button type="button" className="absolute bottom-6 left-6 text-gray-500 hover:text-black">
            <AiOutlinePaperClip size={20} />
          </button>
          <button
            type="submit"
            className="absolute bottom-6 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-black"
          >
            <AiOutlineArrowUp size={20} />
          </button>
        </div>
      </form>

      {/* Submit Button */}
      <button className="mt-4 bg-primary-dark text-white py-3 px-8 rounded-full font-semibold hover:opacity-90">
        Submit Symptoms
      </button>

      {/* Footer Note */}
      <p className="text-sm text-gray-500 my-4">ChatHealth can make mistakes. Check important info.</p>
    </div>
  );
}
