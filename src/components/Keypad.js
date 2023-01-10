// function EnterKeyCode() {
//  function handleChange(e) {
//     console.log (`Entering password...`)
//  }}

function Keypad (){
    function handleChange(event) {
        console.log (`Entering password...`);
     }
    return (
        <div>
            <input 
            type="password"
            onChange={handleChange}
            />
        </div>
    );
}

export default Keypad;