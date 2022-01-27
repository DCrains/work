import Image from "next/image"
import clock from "../../public/whychangly/clock.png"
import stars from "../../public/whychangly/stars.png"
import arrows from "../../public/whychangly/arrows.png"
import cards from "../../public/whychangly/cards.png"
import styles from "../WhyChangly/whychangly.module.css"

const WhyChangly = () =>{
    return(
        <section className={styles.whychangly_main}>
            <h2 className={styles.whychangly}>Why Changly</h2>
            <div className={styles.why_container}>
                <div className={styles.card}>
                    <Image src={clock} className={styles.why_img}/>
                    <div className={styles.card_container}>
                        <h3 className={styles.card_title}>24/7 live support</h3>
                        <p className={styles.card_txt}>Our dedicated support team is always ready to assist you with any questions regarding crypto exchanges.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src={stars} className={styles.why_img}/>
                    <div className={styles.card_container}>
                        <h3 className={styles.card_title}>Competitive rates on the market</h3>
                        <p className={styles.card_txt}> We work with a variety of crypto trading platforms in order to find the best offer on the market for you.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src={arrows} className={styles.why_img}/>
                    <div className={styles.card_container}>
                        <h3 className={styles.card_title}>Speedy transactions</h3>
                        <p className={styles.card_txt}>We achieved an average transaction speed of 25-40 minutes to ensure you get the best out of the crypto market.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src={cards} className={styles.why_img}/>
                    <div className={styles.card_container}>
                        <h3 className={styles.card_title}>Security of your funds</h3>
                        <p className={styles.card_txt}>We do not store cryptocurrencies. Coins are sent directly to your wallet after the exchange.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhyChangly