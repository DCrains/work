import Image from "next/image"
import Link from "next/link"
import logo from "../../public/header/changelly-light.svg"
import strelka from "../../public/header/strelka.svg"
import avatar from "../../public/header/avatar.svg"
import countries from "../../public/header/countries.svg"
import styles from "../Header/header.module.css"
import burger from "../../public/header/burger.svg"
import { Icon, IconButton, SwipeableDrawer } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import gpay from "../../public/header/gplay.svg"
import apay from "../../public/header/appstore.svg"
import logo2 from "../../public/header/logo2.svg"
import classNames from "classnames"

const Header = () => {
    const matches3 = useMediaQuery('(max-width:1000px)')
    const [open, setOpen] = useState(false)
    const matches = useMediaQuery('(max-width:770px)');
    const matches2 = useMediaQuery('(max-width:640px)');
    return (
        <div className={styles.maincontainer}>
            <header className={styles.header}>
                {matches ?
                    <>
                        {matches2 ?
                            <div className={styles.logo}>
                                <Image src={logo2} className={styles.logosvg} />
                            </div>
                            :
                            <div className={styles.logo}>
                                <Image src={logo} className={styles.logosvg} />
                            </div>
                        }
                        <div className={styles.burger} onClick={() => setOpen(true)}>
                            <Image src={burger} />
                        </div>
                        <SwipeableDrawer
                            className={styles.swipemenu}
                            anchor="top"
                            open={open}
                            onOpen={() => setOpen(true)}
                            onClose={() => setOpen(false)}
                        >
                            <div className={styles.icons_item}>
                                <div className={styles.logo}>
                                    <Image src={logo} className={styles.logosvg} />
                                </div>
                                <ClearIcon className={styles.ClearIcon} onClick={() => setOpen(false)} />
                            </div>

                            <div className={styles.table}>
                                <div className={styles.table_item} style={{ justifyContent: 'flex-start' }}>
                                    <div className={styles.avatarmenu}><Image src={avatar} width={40} height={40} /></div> Log in
                                </div>
                                <div className={styles.table_item}>Language  <i className={styles.navigation2_2countries}></i></div>
                                <div className={styles.table_item}>Support</div>
                                <div className={styles.table_item}>About us</div>
                                <div className={styles.table_item}>All products</div>
                                <div className={styles.getapp}>Get the app now
                                    <div className={styles.pay}><Image src={gpay} />
                                        <Image src={apay} /></div>
                                </div>

                            </div>
                        </SwipeableDrawer>
                    </>
                    :
                    <div className={styles.container}>
                        <div className={styles.navigation1}>
                            {matches2 ?
                                <div className={styles.logo}>
                                    <Image src={logo2} className={styles.logosvg} />
                                </div>
                                :
                                <div className={styles.logo}>
                                    <Image src={logo} className={styles.logosvg} />
                                </div>
                            }

                            <Link href='/'><a className={styles.navigation1_item_active}>Personal</a></Link>
                            <Link href='/'><a className={styles.navigation1_item}>Business</a></Link>
                        </div>
                        <div className={styles.navigation2}>
                            <div className={styles.navigation2_1}>
                                <button className={styles.navigation2_1button}><span>All Products</span><Image src={strelka} className={styles.strelka} /></button>
                                <Link href='/'><a className={styles.navigation2_item}>Support</a></Link>
                                <Link href='/'><a className={styles.navigation2_item}>About us</a></Link>
                            </div>
                            <div className={styles.navigation2_2}>
                                <i className={styles.navigation2_2countries}></i>
                                <Image src={avatar} className={styles.navigation2_2avatar} width={40} height={40} />
                            </div>
                        </div>
                    </div>
                }

            </header>

            {matches3
                    ?
                    <div className={styles.SideBarcontainer_mobile}>
                        <a className={classNames(styles.menutxt_mobile, styles.menutxt_mobile_active)}>Exchange</a>
                        <a className={styles.menutxt_mobile}>Buy</a>
                        <a className={styles.menutxt_mobile}>Sell</a>
                        <a className={styles.menutxt_mobile}>Trade</a>
                    </div> :
                    null

            }
        </div>
    )
}
export default Header 