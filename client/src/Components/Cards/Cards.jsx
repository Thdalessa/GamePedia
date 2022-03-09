import React from 'react';
import { useDispatch, useSelector} from  'react-redux';
import {useEffect} from 'react';
import {useState} from 'react'

import { getGames } from '../../Redux/actions.js';
import styles from './Cards.module.css';

import Card from './Card.jsx';

const ITEMS_PER_PAGE = 15;


export default function Cards (props){
  let games = [...props.gamesFromApi];
  let firstOnes = [...props.gamesFromApi].splice(0, ITEMS_PER_PAGE)

  const [currentPage, setCurrentPage] = useState(0);
  const [firstIndex, setfirstIndex] = useState(0);

   
  let dispatch = useDispatch();
  useEffect(() => {
    setCurrentPage(currentPage)
    console.log('Entro al useEffect unico primerizo zzz' + currentPage)
    dispatch(getGames())
  },[]) 

  const nextHandler = () => {
    const totalElementos = props.gamesFromApi.length;

    const nextPage = currentPage + 1;
    
    let calculating = nextPage * ITEMS_PER_PAGE;
    if(calculating === totalElementos){return};
    console.log('el first index es: ' + calculating)
    setfirstIndex(nextPage * ITEMS_PER_PAGE)
    setCurrentPage(nextPage)
  }

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if(prevPage < 0){return};
    console.log('el first index es: ' + (prevPage * ITEMS_PER_PAGE))
    setfirstIndex(prevPage * ITEMS_PER_PAGE)
    setCurrentPage(prevPage)
  };

  return (
    

    <div className={styles.cardsContainer}>
    {[...games].splice(firstIndex, ITEMS_PER_PAGE)?.map((v) => {
      return <Card
        props={v}
        key={v.id}
      />}
      )}
    {
      [...games].length < 1?
        <div className={styles.loadingContainer}>
          <div className={styles.spinnerBox}>
            <div className={styles.configureBorder1}>  
              <div className={styles.configureCore}></div>
            </div>  
            <div className={styles.configureBorder2}>
              <div className={styles.configureCore}></div>
            </div> 
          </div>
        </div>
      : <></>
    }
    <div className={styles.buttonContainer}> 
      <button className={styles.prevButton} onClick={prevHandler}>Prev</button>
      <button className={styles.nextButton} onClick={nextHandler}>Next</button>
    </div>
    </div>

      
    
  );
} 


// const mapStatetoProps = (state) => ({
//   videogames: state.videogames,
// })

// // function mapDispatchToProps(dispatch) {
// //   return bindActionCreators(getGames, dispatch);
// // }

// export default connect(mapStatetoProps, {getGames})(Cards);

  //  console.log('next')
  // const totalElementos = games.length;
  // // console.log(totalElementos)
  // const nextPage = currentPage + 1;
  // const firstIndex = nextPage * ITEMS_PER_PAGE;

  // if(firstIndex === totalElementos)return;
  // let siguientes = videogames.slice(firstIndex, ITEMS_PER_PAGE)
  // // console.log( siguientes)
  // setItems(siguientes)
  // setCurrentPage(nextPage)




  // let games = videogames.slice(0,ITEMS_PER_PAGE)
//   const [currentPage, setCurrentPageGames] = useState(0)
//   const [gameCards, setGameCards] = useState({
//     games: []
//   })
//   let dispatch = useDispatch()




//   const nextHandler = () => {
//   setCurrentPageGames(currentPage + 1);
//   let firstIndex = currentPage * ITEMS_PER_PAGE;
//   games = videogames.slice(firstIndex, (ITEMS_PER_PAGE * (currentPage + 1)))
//   setGameCards(gameCards.games = games)
//   console.log('enter')

//  }

//  const prevHandler = () => {
//   currentPage = currentPage - 1;

//   let firstIndex = currentPage * ITEMS_PER_PAGE;
//   // games = videogames.slice(firstIndex, ITEMS_PER_PAGE)
//   // let prev = pages[0];
//   // if(prev===null)return;

//   // dispatch(getGames(prev))
//  }
