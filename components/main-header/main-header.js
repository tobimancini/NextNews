import Link from "next/link";

const MainHeader = () => {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href={"/"}>NextNews</Link>
            </div>
            <ul>
                <li>
                    <Link href={"/news"}>News</Link>
                </li>
            </ul>
        </header>
    )
}

export default MainHeader;