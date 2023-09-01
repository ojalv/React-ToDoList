
import './TodoCounter.css';
function TodoCounter({ total, completed }) {
    return (
      <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: '0px',
        padding:'48px'
      }}> 
        Has completado {completed} de {total} TODOS
      </h1>
    );
  }

  export { TodoCounter }