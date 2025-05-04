import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown'; // Importe a biblioteca

interface IProps {
    texto: string;
    enviadoPorBot: boolean;
}

export function CardMensagem({ texto, enviadoPorBot }: IProps) {
    return (
        <div className={`flex  items-start ${enviadoPorBot ? 'justify-end' : ' items-start'} gap-2.5`}>
            {
                enviadoPorBot ?
                    <Image width={30} height={30} className="object-contain" src="/images/landing-page/icone_pantera_bot.webp" alt="Emoji Furia Chat" /> :
                    <Image width={30} height={30} className="object-contain" src="/images/landing-page/icone_emoji_sorrindo.webp" alt="Emoji user Chat" />
            }
            <div className={`flex flex-col w-full max-w-[900px] leading-1.5 p-4 border-gray-200 text-black ${enviadoPorBot ? 'bg-dark-yellow order-first rounded-l-xl rounded-b-xl' : 'bg-white rounded-e-xl rounded-es-xl'} `}>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    {
                        enviadoPorBot ?
                            <span className="text-sm font-semibold ">Furia</span> :
                            <span className="text-sm font-semibold">FuriaFan</span>
                    }
                    <span className="text-sm font-normal">11:46</span>
                </div>
                {/* Use ReactMarkdown para renderizar o texto */}
                <ReactMarkdown
                  components={{
                    ul: ({ ...props }) => <ul className='text-20px' style={{ listStyleType: 'disc', paddingLeft: '20px' }} {...props} />,
                    li: ({  ...props }) => <li style={{ margin: '10px 0' }} {...props} />,
                    p: ({  ...props }) => <p className="text-20px font-normal py-2.5" {...props} />,
                }}
                >
                    {texto}
                </ReactMarkdown>
                {
                    enviadoPorBot ? null :
                        <span className="font-normal text-blue-700">Enviado</span>
                }
            </div>
        </div>
    );
}