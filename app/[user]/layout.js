import Header from "./(components)/Header";
import Nav from "./(components)/Nav";

import "./(styles)/layout.css";
import "./(styles)/main.css";

export default function AppLayout({ children }) {

    return (
        <html lang="pl">
            <head>
                <title>Zaplanuj jedzonko</title>
            </head>
            <body className="bg-body">
                <Header/>
                <div className="content">
                    <Nav/>
                    <div className="content-card">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}