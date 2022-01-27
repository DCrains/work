import styles from "../Exchange/exchange.module.css"
import gplay from "../../public/exchange/gplay.svg"
import apk from "../../public/exchange/apk.svg"
import appstore from "../../public/exchange/appstore.svg"
import change from "../../public/exchange/change.svg"
import lock from "../../public/exchange/lock.svg"
import qustion from "../../public/exchange/qustion.svg"
import unlock1 from "../../public/exchange/unlock1.svg"
import unlock2 from "../../public/exchange/unlock2.svg"
import strelka from "../../public/exchange/strelka.svg"
import Image from "next/image"

const Exchange = () => {
    console.log(unlock2)
    return(
            <section className={styles.form}>
                <div className={styles.formcontainer}>
                    <div className={styles.calculator}>
                        <div className={styles.switch}>
                            <div className={styles.switch_container}>
                                <button className={styles.switch_button}><Image src={unlock1} className={styles.lock}/>Floating rate</button>
                                <button className={styles.switch_button2}><Image src={lock} className={styles.lock}/>Fixed rate</button>
                            </div>
                            <div className={styles.qustion}><Image src={qustion}/></div>
                        </div>
                        <div className={styles.send}>
                            <div className={styles.yousend}>
                                <p className={styles.yousend_txt}>You send</p>
                                <input className={styles.value_send} value={'0.1'}></input>
                            </div>
                            <div className={styles.send_value}>
                            <button className={styles.send_button}>
                                <div className={styles.send_txt}>
                                   <div className={styles.etherium}>Etherium</div>
                                   <div className={styles.ETH1}>ETH</div>
                                </div>
                                <div className={styles.strelka}>
                                <Image src ={strelka} />
                                </div>
                            </button>
                            </div>
                        </div>
                        <div className={styles.fees}>
                            <div className={styles.estimation}><Image src={unlock2}/>1 BTC ~ 14.99332832 ETH• All fees <a className={styles.included}>  included</a> </div> 
                            <button className={styles.change}><Image src={change} className={styles.change}/></button>
                        </div>
                        <div className={styles.send}>
                            <div className={styles.yousend}>
                                <p className={styles.yousend_txt}>You get</p>
                                <input className={styles.value_send} value={'~ 0.00616948'}></input>
                            </div>
                            <div className={styles.send_value}>
                            <button className={styles.send_button}>
                                <div className={styles.send_txt}>
                                   <div className={styles.etherium1}>Bitcoin</div>
                                   <div className={styles.ETH1}>BTC</div>
                                </div>
                                <div className={styles.strelka}>
                                <Image src ={strelka} />
                                </div>
                            </button>
                            </div>
                        </div>
                        <button className={styles.button}><span className={styles.exchangenow}>Exchange now</span></button>
                    </div>
                    <div className={styles.txt}>
                        <h1 className={styles.crypto}>Exchange any crypto 
                        <span className={styles.inst}>instantly.</span>
                        </h1>
                        <p className={styles.random}>Exchange Bitcoin and 200+ altcoins in a fast, simple and secure way.</p>
                        <div className={styles.getin}>
                            <Image src={gplay}/>
                            <Image src={apk}/>
                            <Image src={appstore}/>
                        </div>
                    </div>
                </div>
            </section> 
    )
}
export default Exchange