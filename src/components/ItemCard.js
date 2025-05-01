import { React } from 'react'
import { useNavigate } from 'react-router'

import styles from '../css/home_style.module.css'


function ItemCard(props) {
  const navigate = useNavigate()

  if (props.type === 'tshirt') {
    return (
      <div className={styles.item}>
        <img className={styles.itemPhoto} src={props.img} alt='asd' />

        <div className={styles.itemInfo}>
          <div>
            <h1 className={styles.h}>T-shirt «Papa, Papa & Ya»</h1>
            <h2 className={`${styles.h} ${styles.h2}`}>₴ 630</h2>
            <h4 className={styles.h}>Color:</h4>
            <div className={`${styles.colorPick} ${styles[`color${props.color}`]}`}></div>
          </div>

          <button className={`${styles.button} ${styles.viewMore}`} onClick={() => { navigate(`/${props.color.toLowerCase()}-tshirt`) }}>View more</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.item}>
        <div className={styles.itemInfo}>
          <div>
            <h1 className={styles.h}>T-shirt «Papa, Papa & Ya»</h1>
            <h2 className={`${styles.h} ${styles.h2}`}>₴ 630</h2>
            <h4 className={styles.h}>Color:</h4>
            <div className={`${styles.colorPick} ${styles[`color${props.color}`]}`}></div>
          </div>

          <button className={`${styles.button} ${styles.viewMore}`} onClick={() => { navigate(`/${props.color.toLowerCase()}-tshirt`) }}>View more</button>
        </div>

        <img className={styles.itemPhoto} src={props.img} alt='asd' />
      </div >
    );
  }
}

export default ItemCard