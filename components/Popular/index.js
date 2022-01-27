import Image from "next/image"
 import strelka from "../../public/popular/strelka.svg"
import grafik1 from "../../public/popular/grafik1.png"
import grafik2 from "../../public/popular/grafik2.png"
import grafik3 from "../../public/popular/grafik3.png"
import grafik4 from "../../public/popular/grafik4.png"
import grafik5 from "../../public/popular/grafik5.png"
import grafik6 from "../../public/popular/grafik6.png"
import grafik7 from "../../public/popular/grafik7.png"
import grafik8 from "../../public/popular/grafik8.png"
import styles from "../Popular/popular.module.css"
import { useState } from "react"
import classNames from "classnames"

const Popular = () => {
    const [sort, setSort] = useState(4);
    const cardmassive = [{
        title: <>ETH<Image src={strelka} />BTC</>,
        span: '1 ETH = 0.07 BTC',
        img2: grafik1,
        span1: -1.51,
        span2: ' · last month'
    }, {
        title: <>BTC<Image src={strelka} />XMR</>,
        span: '1 BTC = 255.07 XMR',
        img2: grafik2,
        span1: 0.17,
        span2: ' · last month'
    }, {
        title: <>BTC<Image src={strelka} />ETH</>,
        span: '1 BTC = 14.91 ETH',
        img2: grafik3,
        span1: 1.49,
        span2: ' · last month'
    }, {
        title: <>DOGE<Image src={strelka} />BTC</>,
        span: '1 DOOGE = 0.00 BTC',
        img2: grafik4,
        span1: -0.97,
        span2: ' · last month'
    }, {
        title: <>ETH<Image src={strelka} />USDT</>,
        span: '1 ETH = 2536.06 USDT',
        img2: grafik5,
        span1: -4.98,
        span2: ' · last month'
    }, {
        title: <>ETH<Image src={strelka} />BNB</>,
        span: '1 ETH = 6.55 BNB',
        img2: grafik6,
        span1: -0.31,
        span2: ' · last month'
    }, {
        title: <>BNB<Image src={strelka} />BTC</>,
        span: '1 BNB = 0.01 BTC',
        img2: grafik7,
        span1: -1.37,
        span2: ' · last month'
    }, {
        title: <>BNB<Image src={strelka} />ETH</>,
        span: '1 BNB = 0.15 ETH',
        img2: grafik8,
        span1: 0.31,
        span2: ' · last month'
    }]

    return (
        <section className={styles.form}>
            <div className={styles.pop}>
                <h2 className={styles.pop_txt1}>Popular Exchange pairis</h2>
                <a className={styles.pop_txt2}>view all supported pairs</a>
            </div>
            <div className={styles.cardscontainer}>
                {cardmassive.slice(0 , sort).map((card, idx) => {
                    return (
                        <div key={idx} className={styles.card}>
                            <h3 className={styles.card_title}>{card.title}</h3>
                            <span className={styles.sravnenie}>{card.span}</span>
                            <div className={styles.grafiks}><Image src={card.img2}/></div>
                            <div className={styles.update}>
                                <span className={classNames(card.span1 > 0 ? styles.percent : styles.percent2)}>{card.span1}%</span>
                                <span className={styles.last}>{card.span2}</span>
                            </div>
                        </div>
                    )
                })}
               
            </div>
            <div className={styles.show}>
                    <button className={styles.show_button} onClick={sort === 8 ? ()=>setSort(4) : ()=>setSort(8) }>
                        <span className={styles.show_txt}>{sort === 4 ? 'show more' : 'hide'}</span>
                    </button>
                </div>
        </section>
    )
}
export default Popular