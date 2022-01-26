import Image from "next/image"
import clock from "../../public/whychangly/clock.png"
import stars from "../../public/whychangly/stars.png"
import arrows from "../../public/whychangly/arrows.png"
import cards from "../../public/whychangly/cards.png"

const WhyChangly = () =>{
    return(
        <section>
            <h2></h2>
            <div>
                <div>
                    <Image src={clock}/>
                    <div>
                        <h3>24/7 live support</h3>
                        <p>Our dedicated support team is always ready to assist you with any questions regarding crypto exchanges.</p>
                    </div>
                </div>
                <div>
                    <Image src={stars}/>
                    <div>
                        <h3>Competitive rates on the market</h3>
                        <p>We work with a variety of crypto trading platforms in order to find the best offer on the market for you.</p>
                    </div>
                </div>
                <div>
                    <Image src={arrows}/>
                    <div>
                        <h3>Speedy transactions</h3>
                        <p>We achieved an average transaction speed of 25-40 minutes to ensure you get the best out of the crypto market.</p>
                    </div>
                </div>
                <div>
                    <Image src={cards}/>
                    <div>
                        <h3>Security of your funds</h3>
                        <p>We do not store cryptocurrencies. Coins are sent directly to your wallet after the exchange.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhyChangly