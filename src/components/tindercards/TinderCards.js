import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
const TinderCards = () => {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'
        },

        {
            name: 'Anita Mikołaj',
            url: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_640.jpg'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }

    return (
        <div className="tinderCards">

            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>


                    </TinderCard>
                ))
                }

            </div>

        </div >
    )
}

export default TinderCards;
