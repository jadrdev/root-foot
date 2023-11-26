import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useMove } from 'react-use-gesture';
import '../styles/global.css'
const items = [
  { id: 1, title: 'Why', content: '01' },
  { id: 2, title: 'Who', content: '02' },
  { id: 3, title: 'What', content: '03' },
  { id: 4, title: 'How', content: '04' },
]; // Reemplaza con tus elementos

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [props, set] = useSpring(() => ({
    right: 0,
    width: 0,
    config: { mass: 1, tension: 180, friction: 12 },
  }));

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const bind = useMove(({ xy: [mx] }) => {
    const rightPosition = window.innerWidth - mx; // Calcular la posición desde la derecha
    set({ right: rightPosition, width: mx });
  });

  return (
    <div id="band">
      {items.map(({ id, title, content }, index) => (
        <div className='band' key={id}>
          <div
            onMouseMove={bind}
            onClick={() => handleItemClick(index)}
            style={{
              cursor: 'pointer',
              border: '1px solid #ccc',
              padding: '10px',
              marginLeft: '5px', // Añadido margen para separar los elementos
              backgroundColor: index === activeIndex ? '#eee' : 'white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ writingMode: 'vertical-rl' }}>{id}</div>
            <div>{title}</div>
          </div>
          {index === activeIndex && (
            <animated.div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: props.right,
                overflow: 'hidden',
                width: props.width.interpolate((width) => `${width}px`),
              }}
            >
              <div style={{ padding: '10px' }}>
              <div class="hero">

                </div>
                {content}
              </div>
            </animated.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;