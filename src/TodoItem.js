function TodoItem(props) {
    let check
    if(props.completed){
        check = 'V'
    }
    else{
        check ='X'
    }
    return (
      <li>
        <span>{check}</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    )
  }

export {TodoItem}