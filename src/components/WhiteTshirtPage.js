import { React, useState } from 'react'
import Header from './Header';
import styles from '../css/item_style.module.css';

import redTshirtImg from '../img/white_tshirt/fytbolka_white_red.png'
import redTshirtImgBack from '../img/white_tshirt/fytbolka_white_red_back.png'

import yellowTshirtImg from '../img/white_tshirt/fytbolka_white_yellow.png'
import yellowTshirtImgBack from '../img/white_tshirt/fytbolka_white_yellow_back.png'

import blueTshirtImg from '../img/white_tshirt/fytbolka_white_blue.png'
import blueTshirtImgBack from '../img/white_tshirt/fytbolka_white_blue_back.png'

import npLogo from '../img/novaposhta_logo.png'
import ukrLogo from '../img/ukrposhta.png'
import mstLogo from '../img/meest_logo.png'


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

          <div className={`${styles.itemInfo} ${styles[`bg${color}`]}`}>
            <div>
              <h1 className={styles.h}>T-shirt «Papa, Papa & Ya»</h1>
              <h2 className={`${styles.h} ${styles.h2}`}>₴ 630</h2>

              <h4 className={styles.h}>Color:</h4>
              <div className={`${styles.colorPick} ${styles[`color${props.color}`]}`}>
                <div className={`${styles.colorChoose} ${styles.setRed} ${styles.red} ${color === 'red' ? styles.selectedColor : ''}`}
                  onClick={() => setColor('red')}></div>

                <div className={`${styles.colorChoose} ${styles.setYellow} ${styles.yellow} ${color === 'yellow' ? styles.selectedColor : ''}`}
                  onClick={() => setColor('yellow')}></div>

                <div className={`${styles.colorChoose} ${styles.setBlue} ${styles.blue} ${color === 'blue' ? styles.selectedColor : ''}`}
                  onClick={() => setColor('blue')}></div>
              </div>

              <h4 className={styles.h}>Size:</h4>
              <div className={styles.sizePick}>
                <div className={`${styles.sizeChoose} ${styles.inStock} ${size === 'M' ? styles.selectedSize : ''}`}
                  onClick={() => setSize('M')}>M</div>
                <div className={`${styles.sizeChoose}  ${styles.inStock} ${size === 'L' ? styles.selectedSize : ''}`}
                  onClick={() => setSize('L')}>L</div>
                <div className={`${styles.sizeChoose} ${styles.inStock} ${size === 'XL' ? styles.selectedSize : ''}`}
                  onClick={() => setSize('XL')}>XL</div>
                <div className={`${styles.sizeChoose} ${styles.outOfStock} ${styles.notAllowed} ${size === 'XXL' ? styles.selectedSize : ''}`}
                  onClick={() => setSize('XXL')}>XXL</div>
              </div>
            </div>

            <button className={`${styles.orderBtn} ${styles[color]}`} onClick={() => { }}>Order now</button>
          </div>
        </div>

        <div className={styles.itemDetails}>
          <div className={styles.description}>
            <div>
              <h3 className={styles.h}>Description:</h3>
              <p>Type: Tshirt</p>
              <p>Материал: 90% Cotton | 10% Polyester</p>
              <p>Color: White</p>
              <p>Season: Spring / Summer</p>
            </div>

            <a href="asd"><i>Sizes Table</i></a>

            <div>
              <span>
                <i>The vibrant print on this t-shirt will draw attention and make you stand out from the crowd. It is perfect
                  for lovers of art and self-expression, adding a touch of creativity to your closet.
                </i>
              </span>
            </div>
          </div>

          <div className={styles.delivery}>
            <h3 className={styles.h}>Delivery ways:</h3>
            <table className={styles.deliveryTable}>
              <tr>
                <th className={styles.deliveryCity} scope="col" colspan="3">Delivery throughout Ukraine and Poland</th>
              </tr>
              <tr>
                <th><img src={npLogo} /></th>
                <th>From 50₴</th>
                <th>1 to 3 days</th>
              </tr>
              <tr>
                <th><img src={ukrLogo} /></th>
                <th>From 30₴</th>
                <th>3 to 10 days</th>
              </tr>
              <tr>
                <th><img src={mstLogo} /></th>
                <th>From 60₴</th>
                <th>2 to 5 days</th>
              </tr>
            </table>
          </div>
        </div>
      </div >
    </>
  );
}

export default BlackTshirtPage