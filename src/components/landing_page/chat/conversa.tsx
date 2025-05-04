'use client';
import { useChat } from '@/hooks/use_chat';
import React, { useState, Suspense } from 'react';
import ListaMensagens from './lista_mensagens';
import { ChatInput } from './chat_input';
import dynamic from 'next/dynamic';
import animationData from '../../../../public/lottie/load_mensagem.json';

const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false, 
});

const LoadingAnimation = () => (
  <div className="flex justify-center items-center my-4">
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      height={100}
      width={100}
    />
  </div>
);
export function SessaoConversa() {
  const { mensagens, inputMensagem, setMensagem, handleSubmit: handleChatSubmit } = useChat();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setIsLoading(true);
    await handleChatSubmit(event);
    setIsLoading(false);
  };

  return (
    <div className="max-w-[900px] mx-auto px-[5px] py-[20px] md:p-[40px] bg-gray-600/65 rounded-xl">
      <ListaMensagens mensagens={mensagens} />
      <Suspense fallback={<LoadingAnimation />}>
        {isLoading ? (
          <LoadingAnimation />
        ) : null}
      </Suspense>
      <ChatInput
        inputMensagem={inputMensagem}
        setMensagem={setMensagem}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
