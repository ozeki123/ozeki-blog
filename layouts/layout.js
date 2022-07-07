import Header from '../components/Header/Header'
import styles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      
      <div className={styles.contents}>
        <main>{children}</main>
      </div>
      
    </div>
    
  )
}

export default Layout