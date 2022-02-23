import React, { useState } from 'react';

export default function LikeButton() {
  const [contador, SelecCuenta] = useState(0);
  const [color, setColor] = useState(0);
  const [plural, setPlural] = useState("s");
  
  const colors = ['purple','blue','green','yellow','orange','red'];

  const  likes = () => {
      SelecCuenta(contador +1);
      if (contador !== 0) {
         setPlural("s");
      } else {
          setPlural ("");
      };

      if ((color >= 0) && (color <= 4)) {
        setColor(color + 1);
    } else {
        setColor(color - 5);
    };
  }
    return (
      <div class="btn">
        <button class="click" onClick={likes} style={{backgroundColor: colors[color]}}>{contador} Like{plural} </button>
      </div>
    );
  }
