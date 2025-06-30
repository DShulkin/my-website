import React from 'react'
import * as styles from './ApiDirectory.module.css'

export default function ApiDirectory({projectImage}) {
  return (
    <div className={styles.apiContainer}>
      <div 
        className={styles.apiImage}
        style={{backgroundImage: `url(${projectImage})`}}
      >
      </div>
    </div>
  )
}


// import React from 'react'
// import * as styles from './ApiDirectory.module.css'

// export default function ApiDirectory () {
//     return (
//       <div className={styles.apiContainer}>
//         <div className={styles.apiImage}></div>
//       </div>
//     )      
// }
