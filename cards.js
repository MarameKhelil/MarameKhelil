import React from 'react';
import './cards.css';
import CardItem from './carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Catégories offres d'emploi</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/santé.jpg'
              text="Santé"
              label='Santé'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Télécommunications'

              label='Technologie'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/IT.jpg'
              text='Informatique'
              label='Technologies'
              path='/services'
            />
            <CardItem
              src='images/marketing.jpg'
              text='Marketing::Est-tu un expert en marketing ou un étudiant en marketing !'
              label='Economie'
              path='/products'
            />
            <CardItem
              src='images/sport6.jpg'
              text='Sport: vous etes un prof d"education physique ou un kiné de sport ! vous etes dans le meilleur endroit'
              label='Sport'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;