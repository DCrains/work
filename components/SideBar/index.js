import styles from "../SideBar/sidebar.module.css"
import ocenka from "../../public/body/ocenka.svg"
import Image from "next/image"
import top from "../../public/body/top.svg"
import { useMediaQuery } from "@mui/material"


const SideBar = () => {
    const matches = useMediaQuery('(max-width:1000px)')
    return (
        <>
        {!matches ? 
        <div className={styles.SideBarcontainer}>
            <div className={styles.SideBar}>
                <ul className={styles.SideBarmenu}>
                    <li className={styles.menuitemmain}><a className={styles.menutxt}>Exchange</a></li>
                    <li className={styles.menuitem}><a className={styles.menutxt}>Buy</a></li>
                    <li className={styles.menuitem}><a className={styles.menutxt}>Sell</a></li>
                    <li className={styles.menuitem}><a className={styles.menutxt}>Trade</a></li>
                </ul>
                <div className={styles.scrol}>
                    <div className={styles.scroltop}>
                        <button className={styles.buttontop}>
                    <Image src={top} className={styles.topimg}/>
                    </button>
                        <a className={styles.ocenkaitem}>scrol to top</a>
                    </div>
                    <div className={styles.ocenka}>
                        <a >Excellent service since 2015</a>
                        <div className={styles.imgocenka}>
                        <Image src={ocenka}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        : 
        null
        }
        </>
    )
}

export default SideBar