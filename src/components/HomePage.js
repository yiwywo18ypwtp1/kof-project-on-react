import { React, useRef } from 'react';

import Header from './Header';
import ItemCard from './ItemCard';

import arrowBack from '../img/icons8-back-30-white.png'
import arrowForward from '../img/icons8-forward-30-white.png'

import blackTshirt from '../img/black_tshirt/fytbolka_black_red.png'
import whiteTshirt from '../img/white_tshirt/fytbolka_white_red.png'

import blackSweetshort from '../img/black_sweetshot/sweet_black_red.png'
import whiteSweetshort from '../img/white_sweetshot/sweet_white_red.png'

import styles from '../css/home_style.module.css'


function HomePage() {
  const tshirtRowRef = useRef(null);
  const sweetRowRef = useRef(null);

  // tshirts
  const tshirtScroll = (direction) => {
    if (tshirtRowRef.current) {
      const scrollAmount = tshirtRowRef.current.offsetWidth;
      tshirtRowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // sweetshots
  const scrollSweets = (direction) => {
    if (sweetRowRef.current) {
      const scrollAmount = sweetRowRef.current.offsetWidth;
      sweetRowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Header />

      <div className={styles.itemsColumn}>
        {/* tshirts */}
        <div className={styles.sectionTitleWrapper}>
          <h3 className={styles.sectionTitle}>T-SHIRTS</h3>
        </div>

        <div className={styles.itemType}>
          <button className={styles.carouselBtn} onClick={() => tshirtScroll('left')}><img src={arrowBack} alt='back' /></button>

          <div className={styles.carouselWrapper}>
            <div className={styles.itemsRow} ref={tshirtRowRef}>
              <ItemCard img={blackTshirt} color='Black' type='tshirt' />
              <ItemCard img={whiteTshirt} color='White' type='tshirt' />
            </div>
          </div>

          <button className={styles.carouselBtn} onClick={() => tshirtScroll('right')}><img src={arrowForward} alt='forward' /></button>
        </div >

        {/* sweetshots */}
        <div className={styles.sectionTitleWrapper}>
          <h3 className={styles.sectionTitle}>SWEETSHOTS</h3>
        </div>

        <div className={styles.itemType}>
          <button className={styles.carouselBtn} onClick={() => scrollSweets('left')}><img src={arrowBack} alt='back' /></button>

          <div className={styles.carouselWrapper}>
            <div className={styles.itemsRow} ref={sweetRowRef}>
              <ItemCard img={blackSweetshort} color='Black' type='sweetshot' />
              <ItemCard img={whiteSweetshort} color='White' type='sweetshot' />
            </div>
          </div>

          <button className={styles.carouselBtn} onClick={() => scrollSweets('right')}><img src={arrowForward} alt='forward' /></button>
        </div >
      </div >
    </>
  );
}

export default HomePage;
