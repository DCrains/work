import styles from "../Footer/footer.module.css"
import gplay from "../../public/footer/gplay.svg"
import apay from "../../public/footer/appstore.svg"
import apk from "../../public/footer/apk.svg"
import socials from "../../public/footer/socials.svg"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerblock_1}>
                <div className={styles.footerblock_1_1}>
                    <a className={styles.aheader}>Download our mobile app for your Android or iOS device</a>
                    <div className={styles.getin_img}> <Image src={gplay} /></div>
                    <div className={styles.getin_img}><Image src={apay} className={styles.apay} /></div>
                    <div className={styles.getin_img}><Image src={apk} className={styles.apk} /></div>
                </div>
            </div>
            <div className={styles.footerblock_2}>
                <div className={styles.footerblock_2_1}>
                    <div className={styles.footerblock_item}>
                        <a className={styles.amain}>Company</a>
                        <a className={styles.a}>About</a>
                        <a className={styles.a}>Supported currencies</a>
                        <a className={styles.a}>Press about us</a>
                        <a className={styles.a}>Our partners</a>
                        <a className={styles.a}>Revives</a>
                        <a className={styles.a}>Changelly PRO
                            <span className={styles.new}>new</span>
                        </a>
                        <a className={styles.a}>Crypto app</a>
                    </div>
                    <div className={styles.footerblock_item}>
                        <a className={styles.amain}>Support</a>
                        <a className={styles.a}>FAQ</a>
                        <a className={styles.a}>Helpdesk</a>
                        <a className={styles.a}>Blog</a>
                        <a className={styles.a}>Crash course</a>
                        <a className={styles.a}>COIN360 Heatmap</a>
                    </div>
                    <div className={styles.footerblock_item}>
                        <a className={styles.amain}>For partners</a>
                        <a className={styles.a}>Affiliate Program</a>
                        <a className={styles.a}>API for developers</a>
                    </div>
                    <div className={styles.footerblock_item}>
                        <a className={styles.amain}>Buy / Exchange</a>
                        <a className={styles.a}>Buy Bitcoin</a>
                        <a className={styles.a}>Buy Ethereum</a>
                        <a className={styles.a}>Buy altcoins</a>
                        <a className={styles.a}>Exchange Bitcoin</a>
                        <a className={styles.a}>Exchange ETH</a>
                        <a className={styles.a}>Exchange altcoins</a>
                    </div>
                    <div className={styles.footerblock_item}>
                        <a className={styles.amain}>Legal</a>
                        <a className={styles.a}>Terms of Use</a>
                        <a className={styles.a}>Privacy Policy</a>
                        <a className={styles.a}>For competent authorities</a>
                        <a className={styles.a}>For partners</a>
                        <a className={styles.a}>AML/KYC</a>
                    </div>
                </div>
                <div className={styles.footerblock_2_2}>
                    <div className={styles.footerblock_item}>
                        <a className={styles.amain}>Exchange Pairs</a>
                        <a className={styles.a} >ETH to BTC</a>
                        <a className={styles.a}>BTC to ETH</a>
                        <a className={styles.a}>LTC to ETH</a>
                    </div>
                    <div className={styles.footerblock_item2}>
                        <a className={styles.a}>USDT to BTC</a>
                        <a className={styles.a}>BTC to XRP</a>
                        <a className={styles.a}>BTC to USDT</a>
                    </div>
                    <div className={styles.footerblock_item2}>
                        <a className={styles.a}>LTC to BTC</a>
                        <a className={styles.a}>XRP to BTC</a>
                        <a className={styles.a}>BCH to BTC</a>
                    </div>
                    <div className={styles.footerblock_item2}>
                        <a className={styles.a}>ETH to USDT</a>
                        <a className={styles.a}>DOGE to BTC</a>
                        <a className={styles.a}>DOGE to BTC</a>
                    </div>
                </div>
            </div>
            <div className={styles.footerblock3}>
                <div className={styles.socmain}>
                    <div className={styles.soc1}></div>
                    <div className={styles.soc2}></div>
                    <div className={styles.soc3}></div>
                    <div className={styles.soc4}></div>
                    <div className={styles.soc5}></div>
                    <div className={styles.soc6}></div>
                    <div className={styles.soc7}></div>
                    <div className={styles.soc8}></div>
                    <div className={styles.soc9}></div>
                    <div className={styles.soc10}></div>
                </div>
                <div className={styles.footerblock3_2}>
                    <div className={styles.countries_container}>
                        <i className={styles.countries}></i>
                        <span className={styles.EN}>EN</span>
                    </div>
                    <a className={styles.footerblock3_item}>© Changelly 2015—2022</a>
                </div>
            </div>

        </div>
    )
}
export default Footer
