// hooks/useChat.ts
import { useState } from 'react';
import { postQuestion } from '@/lib/gemini';

interface Mensagem {
  texto: string;
  enviadoPorBot: boolean;
}

interface UseChatResult {
  mensagens: Mensagem[];
  inputMensagem: string;
  setMensagem: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export function useChat(): UseChatResult {
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    { texto: 'Olá Furioso, aqui você pode tirar todas suas dúvidas.', enviadoPorBot: true },
  ]);
  const [inputMensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMensagem.trim()) {
      return;
    }

    setMensagens(prevMensagens => [...prevMensagens, { texto: inputMensagem, enviadoPorBot: false }]);
    setMensagem('');

    const respostaDoBot = await postQuestion(inputMensagem);

    if (respostaDoBot) {
      setMensagens(prevMensagens => [...prevMensagens, { texto: respostaDoBot, enviadoPorBot: true }]);
    } else {
      setMensagens(prevMensagens => [...prevMensagens, { texto: 'Ops! Algo deu errado ao obter a resposta...', enviadoPorBot: true }]);
    }
  };

  return {
    mensagens,
    inputMensagem,
    setMensagem,
    handleSubmit,
  };
}