import "./TodoCounter.css";
function TodoCounter({ total, completed }) {
  return (
    /*      <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: '0px',
        padding:'48px'
      }}> 
*/
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
