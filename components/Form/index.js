import styles from "../Form/form.module.css"
import gplay from "../../public/form/gplay.svg"
import apk from "../../public/form/apk.svg"
import appstore from "../../public/form/appstore.svg"
import change from "../../public/form/change.svg"
import lock from "../../public/form/lock.svg"
import qustion from "../../public/form/qustion.svg"
import unlock1 from "../../public/form/unlock1.svg"
import unlock2 from "../../public/form/unlock2.svg"
import Image from "next/image"

const Form = () => {
    return(
            <section className={styles.form}>
                <div className={styles.formcontainer}>
                    <div className={styles.calculator}>
                        <div className={styles.switch}>
                            <div className={styles.switch_container}>
                                <button className={styles.switch_button}><Image src={unlock1}/>Floating rate</button>
                                <button className={styles.switch_button}><Image src={lock}/>Fixed rate</button>
                            </div>
                            <div className={styles.qustion}><Image src={qustion}/></div>
                        </div>
                        <div className={styles.send}>
                            <div className={styles.yousend}>
                                <p className={styles.yousend_txt}>You send</p>
                                <input className={styles.value_send} value={'0.1'}></input>
                            </div>
                            <div className={styles.send_value}>BTC</div>
                        </div>
                        <div className={styles.fees}>
                            <div className={styles.estimation}><Image src={unlock2}/>1 BTC ~ 14.99332832 ETH• All fees included</div>
                            <button className={styles.change}><Image src={change}/></button>
                        </div>
                        <div className={styles.get}>
                            <div className={styles.youget}>
                                <p className={styles.youget_txt}>You get</p>
                                <input className={styles.value_get} value={'1.489022'}></input>
                            </div>
                            <div className={styles.get_value}>ETH</div>
                        </div>
                        <button className={styles.button}>Exchange now</button>
                    </div>
                    <div className={styles.txt}>
                        <h1 className={styles.crypto}>Exchange any crypto instantly.</h1>
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
export default Form