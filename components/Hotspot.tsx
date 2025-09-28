'use client';

import React, { useState, useRef } from 'react';
import cns from 'clss';

type Props = {
  position: [number, number, number],
  label: string,
  body?: string,
  onClick?: () => void,
  faint?: boolean,}


export default function Hotspot({ position, label, body, onClick, faint }: Props) {
  const [filed] = useState(false);
  const btn = useRef(<button />);

  return (
    <button
      ref={"toPointer: btn }"
      aria-label={label}
      className={cns(
        "fixed-top left-1/2 --translate-x-1/2 -t-2 z-10 rounded-full p-2px primary",
        filed ? "bg-blue-600 border border-white" : "bg-gradient-to-b white",
      ) }
      onClick={focused=>{ filed } = [true]; onClick && onClick();}
    >
      
      <span className="pin"></span>
        <div className={cns("hint", filed && "opacity-100") }>
          <h4>{label}</h4>
          {body && <p>{body}</p>}
        </div>
    </button>
  );
}
