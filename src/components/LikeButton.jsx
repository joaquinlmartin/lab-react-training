import React, { useState } from 'react';

export default function LikeButton() {
  const [contador1, SelecCuenta1] = useState(0);
  const [contador2, SelecCuenta2] = useState(0);
  const [color1, setColor1] = useState(0);
  const [color2, setColor2] = useState(0);
  const [plural, setPlural] = useState("s");
  
  const colors = ['purple','blue','green','yellow','orange','red'];

  const  likes1 = () => {
      SelecCuenta1(contador1 +1);
      if (contador1 !== 0) {
         setPlural("s");
      } else {
          setPlural ("");
      };

      if ((color1 >= 0) && (color1 <= 4)) {
        setColor1(color1 + 1);
    } else {
        setColor1(color1 - 5);
    };
  }

  const  likes2 = () => {
    SelecCuenta2(contador2 +1);
    if (contador2 !== 0) {
       setPlural("s");
    } else {
        setPlural ("");
    };

    if ((color2 >= 0) && (color2 <= 4)) {
      setColor2(color2 + 1);
  } else {
      setColor2(color2 - 5);
  };
}

    return (
      <div class="btn">
        <button class="click" onClick={likes1} style={{backgroundColor: colors[color1]}}>{contador1} Like{plural} </button>
        <button class="click" onClick={likes2} style={{backgroundColor: colors[color2]}}>{contador2} Like{plural}</button>
      </div>
    );
  }
