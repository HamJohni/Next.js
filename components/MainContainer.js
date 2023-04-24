import Link from "./Link";
import Head from "next/head";

const MainContainer = ({children, keywords,title}) => {
    return(
        <>
            <Head>
                <meta keywords={"Zhanybek, Erjan" + keywords}></meta>
                <title>{title}</title>
            </Head>

            <div className="nav">
                <Link href={'/'} text="Главная"/>
                <Link href={"/users"} text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                      .nav {
                        background: orange;
                        padding: 20px;
                        display: flex;
                        column-gap: 20px;
                      }
        
                      .nav__link {
                        color: black;
                        text-decoration: none;
                        font-size: 20px;
                      }
                    `}
            </style>
        </>
    )
}

export default MainContainer