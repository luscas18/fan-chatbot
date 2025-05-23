'use client';
import React from 'react';

interface ChatInputProps {
  inputMensagem: string;
  setMensagem: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({ inputMensagem, setMensagem, onSubmit }: ChatInputProps) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="chat" className="sr-only">Sua mensagem</label>
      <div className="flex items-center py-2 px-1 bg-gray-50 rounded-lg dark:bg-gray-700">
        <textarea
          id="chat"
          value={inputMensagem}
          rows={3}
          onChange={(e) => { setMensagem(e.target.value) }}
          className="block mx-4 text-20px p-2.5 w-full text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-dark-yellow rounded-full cursor-pointer dark:text-shadow-dark-yellow"
        >
          <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
        </button>
      </div>
    </form>
  );
}