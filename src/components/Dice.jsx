import { useState } from "react";
import React from "react";
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

const Dice = () => {
    const [appear, setAppear] = useState(0);
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6, diceEmpty];

    const handleDiceRandom = () => {
        setAppear(6);
        setTimeout(() => {
            const randomDice = Math.floor(Math.random() * 6);
            setAppear(randomDice);
        }, 1000);
    }
    return (
        <img className="dice" onClick={handleDiceRandom} src={dices[appear]} alt="dice" />
    )
}

export default Dice;