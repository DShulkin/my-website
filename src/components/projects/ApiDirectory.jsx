import React from 'react'
import * as styles from './ApiDirectory.module.css'

export default function ApiDirectory({projectImage}) {
  return (
    <div className={styles.apiContainer}>
      <img src={projectImage} alt="Project" className={styles.apiImage} />
    </div>
  )
}