import { FC } from "react";
import styles from "./Footer.module.scss";

export interface FooterProps {

}

export const Footer : FC<FooterProps> = ()=>{



    return <footer className={styles.footer}>
        <p className={styles.support}>Our support team can be reached by email at office@freeprivacypolicy.com</p>
        <p>FreePrivacyPolicy © 2008-2021. All rights reserved.</p>
        <p>Please note that legal information, including legal templates and legal policies, is not legal advice. Please read our legal disclaimer.</p>
        <p>The reproduction, distribution, display, or transmission of the content is strictly prohibited, unless authorized by FreePrivacyPolicy. All other company & product names may be trademarks of the respective companies with which they are associated.</p>

    </footer>;
}
