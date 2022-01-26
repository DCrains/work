import Image from "next/image"
 import strelka from "../../public/popular/strelka.svg"
// import grafik1 from "../../public/form2/grafik1.svg"
// import grafik2 from "../../public/form2/grafik2.svg"
// import grafik3 from "../../public/form2/grafik3.svg"
// import grafik4 from "../../public/form2/grafik4.svg"
// import grafik5 from "../../public/form2/grafik5.svg"
// import grafik6 from "../../public/form2/grafik6.svg"
// import grafik7 from "../../public/form2/grafik7.svg"
// import grafik8 from "../../public/form2/grafik8.svg"

const Popular = () => {
    const cardmassive = [{
        title: <>ETH<Image src={strelka} />BTC</>,
        span: '1 ETH = 0.07 BTC',
        //img2: grafik1,
        span1: '0.29%',
        span2: 'last month'
    }, {
        title: <>BTC<Image src={strelka} />XMR</>,
        span: '1 BTC = 255.07 XMR',
       // img2: grafik2,
        span1: '1.20%',
        span2: 'last month'
    }, {
        title: <>BTC<Image src={strelka} />ETH</>,
        span: '1 BTC = 14.91 ETH',
       // img2: grafik3,
        span1: '-0.39%',
        span2: 'last month'
    }, {
        title: <>DOGE<Image src={strelka} />BTC</>,
        span: '1 DOOGE = 0.00 BTC',
        //img2: grafik4,
        span1: '1.87%',
        span2: 'last month'
    }, {
        title: <>ETH<Image src={strelka} />USDT</>,
        span: '1 ETH = 2536.06 USDT',
        //img2: grafik5,
        span1: '3.79%',
        span2: 'last month'
    }, {
        title: <>ETH<Image src={strelka} />BNB</>,
        span: '1 ETH = 6.55 BNB',
        //img2: grafik6,
        span1: '0.02%',
        span2: 'last month'
    }, {
        title: <>BNB<Image src={strelka} />BTC</>,
        span: '1 BNB = 0.01 BTC',
        //img2: grafik7,
        span1: '0.45%',
        span2: 'last month'
    }, {
        title: <>BNB<Image src={strelka} />ETH</>,
        span: '1 BNB = 0.15 ETH',
       // img2: grafik8,
        span1: '-0.02%',
        span2: 'last month'
    }]
    return (
        <section>
            <div>
                <h2>Popular Exchange pairis</h2>
                <a>view all supported pairs</a>
            </div>
            <div>
                {cardmassive.map((card, idx) => {
                    return (
                        <div key={idx}>
                            <h3>{card.title}</h3>
                            <span>{card.span}</span>
                            <div></div>
                            <div>
                                <span>{card.span1}</span>
                                <span>{card.span2}</span>
                            </div>
                        </div>
                    )
                })}
                <div>
                    <button>show more</button>
                </div>
            </div>
        </section>
    )
}
export default Popular