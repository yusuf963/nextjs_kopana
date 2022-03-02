import Head from "next/head"
const Layout =({title, discreption, keywords, children})=>{
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={discreption} />
                <meta name= "keywords" content={keywords}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </div>
    )
}

Layout.defaultProps = {
    title: "Kopana | your Footbal home",
    discreption: "this is an app for football game matches withen local areas in London",
    keywords: "football, community, frindship, outdoor activity, sport, league"
}

export default Layout