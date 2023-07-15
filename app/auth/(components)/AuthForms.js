import Button from "@/(components)/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faPerson } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import Link from "next/link";

export default function LoginForm() {

    return (
        <div className="login">
            <p>Logowanie</p>
            <form>
                <Input type="email" label="Adres e-mail" icon={faEnvelope}/>
                <Input type="password" label="Hasło" icon={faLock}/>
                <Button text="ZALOGUJ"/>
            </form>
            <div className="btn register-btn" href="#">
                <Link href="/auth/signup">
                    Załóż konto tutaj
                </Link>
            </div>
            <div className="google-btn btn">
                Zaloguj się przez Google
                <FontAwesomeIcon icon={faGoogle}/>
            </div>
        </div>
    )
}

export function SignupForm() {

    return (
        <div className="login">
            <p>Załóż konto</p>
            <form>
                <Input type="text" label="Imię" icon={faPerson}/>
                <Input type="email" label="Adres e-mail" icon={faEnvelope}/>
                <Input type="password" label="Hasło" icon={faLock}/>
                <Input type="password" label="Powtórz hasło" icon={faLock}/>
                <label className="terms-label">
                    <input type="checkbox" required/>
                    Akceptuję warunki rejestracji i korzystania z konta
                </label>
                <Button text="ZAREJESTRUJ"/>
            </form>
            <div className="btn login-btn">
                <Link href="/auth">
                    Zaloguj się
                </Link>
            </div>
        </div>
    )
}