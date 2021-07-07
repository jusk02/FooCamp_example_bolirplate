import Layout from '../components/layout/Layout.js'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
