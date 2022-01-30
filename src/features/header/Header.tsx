import { FC } from "react";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";

export interface HeaderProps {

}

export const Header : FC<HeaderProps> = ()=>{



    return <header className={styles.header}>
        <div className={styles.header_header}>
            <div className={styles.logo}>
                <img src={logo} alt="CSD-logo"/>
                <h1>CSD <span>helper</span></h1>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button}>О системе</button>
                <button className={styles.button}>Получить консультацию</button>
            </div>
        </div>

        <div className={styles.header_body}>
            <div className={styles.header_subtitle}><span className={styles.purple}>C</span>omputer <span className={styles.purple}>S</span>ecurity <span className={styles.purple}>D</span>ocuments helper</div>
            <div className={styles.header_hint}>Давайте начнем с крупных категорий. Внимательно прочитайте вопросы, не пропустите ничего!</div>
        </div>
    </header>;
}
