import React from 'react'
import { SessaoConversa } from './sessao_conversa'
export function TemplateChat() {
  return (
    <section className='py-[40px] lg:py-[60px] bg-dark-yellow'>
      <div className='max-w-padrao mx-auto px-30px text-white'>
        <h2 className='font-special text-25px md:text-35px text-center mb-[8px] md:mb-[12px]'>Curioso sobre a Fúria?</h2>
        <p className='text-18px md:text-20px mb-[24px] md:mb-[32px] max-w-[700px] mx-auto text-center'>Nosso chat inteligente está aqui para responder suas perguntas rapidamente. Converse agora!</p>
        <SessaoConversa/>
      </div>
    </section>
  )
}
