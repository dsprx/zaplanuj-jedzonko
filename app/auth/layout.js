import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/(components)/Logo";

import "./(styles)/Auth.css";
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function AuthLayout({ children }) {

    return (
        <html lang="pl">
            <head>
                <title>Zaplanuj jedzonko</title>
            </head>
            <body>
                <div className="login-card">
                    <Link href="/">
                        <div className="btn-back">
                            <FontAwesomeIcon icon={faArrowLeft}/>
                        </div>
                    </Link>
                    <Logo/>
                    {children}
                </div>
            </body>
        </html>
    )
}