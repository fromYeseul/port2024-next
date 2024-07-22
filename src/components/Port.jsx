import React from 'react';
import { portText } from '@/constants';
import Image from 'next/image';

const Port = () => {
    return (
        <section id="port"> 
            <div className="port__inner">
                <h2 className="port__title">
                    portfolio <em>포폴 작업물</em>
                </h2>
                <div className="port__wrap">
                    {portText.map((port, key)=>(
                        <article className={`port__item p${key+1}`}>
                            <span className="num">{key+1}.</span>
                            <a href={port.code} target="_blank" className="img">
                                <Image src={port.img} alt={port.name} width={420} height={262} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" class="site">사이트 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Port