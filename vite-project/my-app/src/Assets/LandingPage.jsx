import {Outlet, Link} from 'react-router-dom'
import styles from './layout.module.css'

const someName = {}

function LandingPage() {
    return (
        <div className={styles.page}>
<nav>
        <ul>
         
          <link to="/">home</link>
          <link to="/about">About</link>
        </ul>
      </nav>

        <h1> Landing Page </h1>
        <Outlet />
    
    </div>
    )
}
    

    


    export default LandingPage
 