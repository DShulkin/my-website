import React from 'react'
import * as styles from './ApiDirectory.module.css'


export default function () {
    return (
      <div className={styles.ApiDirectory}>
        <div className={styles.ApiDirectoryImage}></div>
      </div>
    )      


// export default function () {
//   const [size, setSize]=React.useState(100)
//     return (
//       <div className={styles.ApiDirectory}>
//         <div className={styles.apiDirectoryImage} style={{
//           "--size": `${size}px`
//         }}></div>
//         <input step={1} type='range' value={size} onChange={e => setSize(e.target.value)}></input> 
//       </div>
//     )      
} 
