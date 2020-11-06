import Head from 'next/head'
import Header from "../components/Header/Header";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>Acumulado</title>
        <link rel="stylesheet" href="css/site.css"/>
      </Head>
      
      <main>
        <Header></Header>
      </main>

    </div>
  )
}
