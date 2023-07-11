import Link from "next/link";

import "@/(styles)/Logo.css"

export default function Logo() {
    return (
        <Link href="/">
            <p className="logo">Zaplanuj <strong>Jedzonko</strong></p>
        </Link>
    )
}