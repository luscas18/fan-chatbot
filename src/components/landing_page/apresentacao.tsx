import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Apresentacao() {
    return (
        <section className='py-[50px] md:py-[60px] text-white bg-gradient-to-b from-black from-50% to-[#3a2901] md:bg-[url(/images/landing-page/background_sessao_apresentacao.webp)] bg-cover bg-right'>
            <div className='max-w-padrao mx-auto px-30px min-h-[70vh] md:max-h-[900px] flex flex-col justify-center'>
                <Image width={180} height={81} className='mx-auto mb-[24px] md:mb-[50px]' src={'/images/landing-page/logo_furia_branca.svg'} alt='Logo da furia' />
                <div className='flex flex-wrap items-center justify-between'>
                    <div className='w-full md:w-[50%]'>
                        <div className='relative p-[20px] bg-gray-200/10 rounded-t-xl rounded-bl-xl mb-[40px]'>
                            <h2 className='font-special font-normal text-35px md:text-40px lg:text-45px'>Feito para quem é fã de verdade <span className='italic animate-gradient bg-gradient-to-r from-[#DDA625] to-[#FF9500] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent'>FuriaChat</span></h2>
                            <div
                                className='absolute bottom-[-30px] right-[0%] border-l-[60px] border-r-[0px] border-t-[30px] border-transparent'
                                style={{ borderTopColor: '#e5e7eb', opacity: '10%' }}
                            ></div>
                        </div>
                        <p className='text-20px font-poppibs md:text-25px mb-[24px] md:mb-[32px]'>Aqui, cada mensagem é um grito de torcida e cada interação <span className='font-bold'>aproxima você ainda mais da sua paixão</span></p>
                        <Link href={'#sobre'} className="bg-dark-yellow hover:bg-dark-yellow text-white font-bold py-2 px-4 rounded">
                            Saiba mais
                        </Link>
                    </div>
                    <div className='w-full md:w-[50%] bg-gradient-to-r from-transparent to-black object-center order-first md:order-last'>
                        <video className='w-[90%] ml-auto' autoPlay muted playsInline>
                            <source src="/videos/logo_furia_animada.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}
