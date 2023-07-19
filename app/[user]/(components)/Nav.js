import Link from "next/link";


export default function Nav() {

    return (
        <div className="left-bar">
            <Link href="/user">
                <div className="element">
                    Pulpit
                </div>
            </Link>
            <Link href="/user/recipes">
                <div className="element">
                    Przepisy
                </div>
            </Link>
            <Link href="/user/plans">
                <div className="element">
                    Plany
                </div>
            </Link>
        </div>
    )
}