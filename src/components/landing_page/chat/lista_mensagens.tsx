'use client';
import React, { useRef, useEffect } from 'react';
import { CardMensagem } from './card_mensage';

interface ListaMensagensProps {
  mensagens: { texto: string; enviadoPorBot: boolean }[];
}

export default function ListaMensagens({ mensagens }: ListaMensagensProps) {
  const mensagensContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mensagensContainerRef.current) {
      mensagensContainerRef.current.scrollTop = mensagensContainerRef.current.scrollHeight;
    }
  }, [mensagens]);

  return (
    <div ref={mensagensContainerRef} className='overflow-y-auto max-h-[60vh] space-y-4 px-[15px] mb-[24px]'>
      {mensagens.map((msg, index) => (
        <CardMensagem key={index} texto={msg.texto} enviadoPorBot={msg.enviadoPorBot} />
      ))}
    </div>
  );
}