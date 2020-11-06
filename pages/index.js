import Head from 'next/head'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";



export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>Acumulado</title>
        <link rel="stylesheet" href="css/site.css"/>
      </Head>
      
      <main>
        <Header></Header>
        <Main></Main>
        {/* <Footer></Footer> */}
      </main>

    </div>
  )
}
