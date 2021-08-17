import React,{useState} from 'react';
import Todo from '../components/Todo';
const Form = () => {
    const [numero, setNumero] = useState('')
    const [prueba, setPrueba] = useState('')
    const [todos, setTodos] = useState([])
    
    const handleChange = e => setPrueba(e.target.value)
    const numeros = e => setNumero(e.target.value)
   
    const handleClick = e => {
       if(numero.trim() === '' || prueba.trim() === ''){
           alert('el campo no puede estar vacio')
           return
       }
       if(numero <= 0){
           alert('la cantidad debe ser mayor que 0')
           return
       }
       setTodos([...todos, {todo: numero + "-" + prueba}])
    }
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar artículo</label><br />
            <input type="text" name="todo" onChange={handleChange} />
            <input type="number" name="numero" onChange={numeros} />
            <button onClick={handleClick}>agregar</button>
        </form>
        {
            todos.map((value, index) => (
                <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} />
            ))
        }
        </>
    )
}
export default Form