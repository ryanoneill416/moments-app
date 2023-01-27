import React from 'react'
import NoResults from '../assets/no-results.png'
import styles from '../styles/NotFound.module.css'
import Asset from "../components/Asset";

const NotFound = () => {
  return (
    <div className={styles.Unreachable}>
        <Asset src={NoResults} message="Sorry, it looks like the page you are looking for does not exist :/" />
    </div>
  )
}

export default NotFound