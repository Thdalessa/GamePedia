import React from 'react';
// import styles from './Cards.module.css';

import Card from './Card.jsx';

export default function Cards({videogames}){
    if(videogames){
        return (
          <div className='cards'>
            {videogames.map(v => <Card
               id={v.id}
                name={v.name} 
                description={v.description} 
                released={v.released} 
                rating={v.rating} 
                genres={v.genres} 
                image={v.image}
              /> )}
          </div>
        );
      } else {
        return(
          <div>Sin videogames</div>
        )
      }
}