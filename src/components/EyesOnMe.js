// function EyesOnMe() {
//     function handleClick(focus, blur) {
//         if (focus) {
//           console.log (`Good!`);
//         } else if (blur) {
//             console.log(`Hey! Eyes on me!`);
//         }
//     }
//     return (
//       <div>
//         <button onClick={handleClick}>Eyes on me</button>
//       </div>
//     );
//   }

function EyesOnMe() {
    function Focus() {
        console.log (`Good!`);
    };
    function Blur() {
        console.log (`Hey! Eyes on me!`);
    };
    return <button onClick={function(event){ Focus(); Blur()}}> Eyes on me </button>
};


  export default EyesOnMe;

