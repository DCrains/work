import styles from "../SideBar/sidebar.module.css"
import ocenka from "../../public/body/ocenka.svg"
import Image from "next/image"
import top from "../../public/body/top.svg"
import { useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"



const SideBar = () => {
  const [first, setfirst] = useState(0);
  useEffect(() => {
    var listener = function (event) {
      setfirst(pageYOffset)
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener)
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
              {first > 200 ? <div className={styles.scroltop} onClick={scrollToTop}>
                <button className={styles.buttontop} >
                  <Image src={top} className={styles.topimg} />
                </button >
                <a className={styles.ocenkaitem}>scroll to top</a>
              </div>
                : null
              }
              <div className={styles.ocenka}>
                <a >Excellent service since 2015</a>
                <div className={styles.imgocenka}>
                  <Image src={ocenka} />
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