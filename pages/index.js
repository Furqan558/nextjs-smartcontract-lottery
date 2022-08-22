import Head from "next/head"
// import Image from "next/image"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
// import ManualHeader from "../components/ManualHeader"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery System</title>
                <meta name="description" content="Furqan Lottery System" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <ManualHeader /> */}
            <Header />
            <main className={styles.main}>
                <LotteryEntrance />
            </main>

            {/* <footer className={styles.footer}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer> */}
        </div>
    )
}
