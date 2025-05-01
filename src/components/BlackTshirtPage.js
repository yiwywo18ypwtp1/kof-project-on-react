import { React, useState } from 'react'
import Header from './Header';
import styles from '../css/item_style.module.css';

import redTshirtImg from '../img/black_tshirt/fytbolka_black_red.png'
import redTshirtImgBack from '../img/black_tshirt/fytbolka_black_red_back.png'

import yellowTshirtImg from '../img/black_tshirt/fytbolka_black_yellow.png'
import yellowTshirtImgBack from '../img/black_tshirt/fytbolka_black_yellow_back.png'

import blueTshirtImg from '../img/black_tshirt/fytbolka_black_blue.png'
import blueTshirtImgBack from '../img/black_tshirt/fytbolka_black_blue_back.png'


function BlackTshirtPage(props) {
  const [color, setColor] = useState('yellow');
  const [size, setSize] = useState('M');
  const [side, setSide] = useState('front');

  const tshirtImages = {
    red: {
      front: redTshirtImg,
      back: redTshirtImgBack,
    },
    yellow: {
      front: yellowTshirtImg,
      back: yellowTshirtImgBack,
    },
    blue: {
      front: blueTshirtImg,
      back: blueTshirtImgBack,
    },
  };

  return (
    <>
      <Header />

      <div className={styles.mainBlock}>
        <div className={styles.item}>
          <img src={tshirtImages[color][side]}
            className={styles.itemPhoto}
            onMouseEnter={() => setSide('back')}
            onMouseLeave={() => setSide('front')}
            alt='asd'
          />

          <div className={styles.itemInfo}>
            <div>
              <h1 className={styles.h}>T-shirt «Papa, Papa & Ya»</h1>
              <h2 className={`${styles.h} ${styles.h2}`}>₴ 630</h2>

              <h4 className={styles.h}>Color: {color}</h4>
              <div className={`${styles.colorPick} ${styles[`color${props.color}`]}`}>
                <div className={`${styles.colorChoose} ${styles.setRed} ${styles.red}`}
                  onClick={() => setColor('red')}></div>
                <div className={`${styles.colorChoose} ${styles.setYellow} ${styles.yellow}`}
                  onClick={() => setColor('yellow')}></div>
                <div className={`${styles.colorChoose} ${styles.setBlue} ${styles.blue}`}
                  onClick={() => setColor('blue')}></div>
              </div>

              <h4 className={styles.h}>Size: {size}</h4>
              <div className={styles.sizePick}>
                <div className={`${styles.sizeChoose} ${styles.inStock}`}
                  onClick={() => setSize('M')}>M</div>
                <div className={`${styles.sizeChoose} ${styles.inStock}`}
                  onClick={() => setSize('XL')}>XL</div>
                <div className={`${styles.sizeChoose} ${styles.outOfStock} ${styles.notAllowed}`}
                  onClick={() => setSize('XXL')}>XXL</div>
              </div>
            </div>

            <button className={`${styles.orderBtn} ${styles[color]}`} onClick={() => { }}>Order now</button>
          </div>
        </div>

        <div className={styles.itemDetails}>
          {/* afhabfkajbhfajhbasfkbhjasfhbajfshjbafs */}
        </div>
      </div >
    </>
  );
}

export default BlackTshirtPage