import React from 'react'
import * as styles from './ApiDirectory.module.css'

export default function ApiDirectory({projectImage}) {
  return (
      <div 
        className={styles.apiImage}
        style={{backgroundImage: `url(${projectImage})`}}
      >
      </div>
  )
}
