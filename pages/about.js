import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const About = ()=>{
    return(
    <>
    <Layout title={'About Page | Kopana'} discreption={Layout.defaultProps.discreption} keyword={Layout.defaultProps.keyword}></Layout>
     <p className={styles.footer}>This is an App for football Lover ❤️ <br></br> and for how is willing to help others to accomplish a mission toward the planet...</p>
    </>
    )
}
export default About