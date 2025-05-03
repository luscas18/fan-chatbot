'use client';
import { useChat } from '@/hooks/use_chat';
import React from 'react';
import ListaMensagens from './lista_mensagens';
import { ChatInput } from './chat_input';

export function SessaoConversa() {
  const { mensagens, inputMensagem, setMensagem, handleSubmit } = useChat();

  return (
    <div className="max-w-[900px] mx-auto p-[40px] bg-gray-600/65 rounded-xl">
      <ListaMensagens mensagens={mensagens} />
      <ChatInput inputMensagem={inputMensagem} setMensagem={setMensagem} onSubmit={handleSubmit} />
    </div>
  );
}