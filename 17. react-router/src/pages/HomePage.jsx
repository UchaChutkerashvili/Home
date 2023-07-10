import React from 'react'
import classes from './HomePage.module.css'
import { Link } from 'react-router-dom';

const characters = [
  {
    name: 'Edmond Dantès',
    photo: 'https://cdnb.artstation.com/p/assets/images/images/015/139/751/large/liliia-beda-img-3892copy.jpg?1547202240',
    about: '/about'
  },
  {
    name: 'Ucha Chutkerashvili',
    photo: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/292389995_5453902097966144_3095352853748786694_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=k85RUkW6IuQAX8XYf3_&_nc_ht=scontent.ftbs5-3.fna&oh=00_AfAS_aqkfcO29ooxKPvGX7NzOz9xGIWNAoR4DRkVlQJtqg&oe=64AF7847',
    about: '/about/5'
  }
];

const HomePage = () => {
  return (
    <div className={classes.characterPage}>
      <h1>Character Page</h1>
      <div className={classes.characterList}>
        {characters.map((character, index) => (
          <div className={classes.characterCard} key={index}>
            <Link to={character.about}><img src={character.photo} alt={character.name} /></Link> 
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage