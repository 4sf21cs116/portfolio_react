// import React, { useState, useEffect } from 'react';

// const CustomCursor = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

//   useEffect(() => {
//     const updateCursorPosition = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener('mousemove', updateCursorPosition);

//     return () => {
//       document.removeEventListener('mousemove', updateCursorPosition);
//     };
//   }, []);

//   return (
//     <div
//       className="custom-cursor"
//       style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
//     ></div>
//   );
// };

// export default CustomCursor;
