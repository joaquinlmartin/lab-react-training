import { useState } from "react";

export default function FaceBook(props) {
  const [count, setCount] = useState(0);

    return (
      <div className="face">
        <div class="face-btns">
        <button> All </button>
        <button> England </button>
        <button> USA </button>
        <button> Malasia </button>
        <button> Germany </button>
        <button> ... </button>
      </div>
        <img className="face-img" src={props.img} alt="image"/>
        <p><strong>First name: </strong>{props.firstName}</p>
        <p><strong>Last name: </strong>{props.lastName}</p>
        <p><strong>Country: </strong>{props.country}</p>
        <p><strong>Type: </strong>{props.isStudent ? "Student" : "Teacher"}</p>
      </div>
    );
  }