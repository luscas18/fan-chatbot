'use client';
import { useChat } from '@/hooks/use_chat';
import React, { useState } from 'react';
import ListaMensagens from './lista_mensagens';
import { ChatInput } from './chat_input';
import Lottie from 'react-lottie';
import animationData from '../../../../public/lottie/load_mensagem.json';

export function SessaoConversa() {
  const { mensagens, inputMensagem, setMensagem, handleSubmit: handleChatSubmit } = useChat();
  const [isLoading, setIsLoading] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleSubmit = async (event: React.FormEvent) => {
    setIsLoading(true);
    await handleChatSubmit(event);
    setIsLoading(false);
  };


  return (
    <div className="max-w-[900px] mx-auto p-[40px] bg-gray-600/65 rounded-xl">
      <ListaMensagens mensagens={mensagens} />
      {isLoading && (
        <div className="flex justify-center items-center my-4">
          <Lottie options={defaultOptions} height={100} width={100} />
        </div>
      )}
      <ChatInput
        inputMensagem={inputMensagem}
        setMensagem={setMensagem}
        onSubmit={handleSubmit}
      />
    </div>
  );
}