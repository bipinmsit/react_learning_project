import React, {useState} from 'react'
import ToDoList from './ToDoList'

const App = () => {
    const [mylist, setmylist] = useState('')
    const [name, setname] = useState([])

    const inputEvent = (event) => {
        setmylist(event.target.value)
    }
    const updateList = () => {
        setname((nameList)=> {
            return [...name, mylist]
        })
        setmylist('')
    }
    const delItem = (id) => {
        console.log('deleted')
        setname((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index!==id
            })
        })
    }
    return(
        <>
            <div>
                <div className="center_div">
                <h2 className="todo_style">ToDo List Welcome</h2><br/>
                <input type="text" 
                placeholder="Add a Item" 
                onChange={inputEvent}
                name="my_list"
                value = {mylist}
                />
                <button className="subBut" onClick={updateList}> + </button>

                {name.map((itemValue, index) => {
                    return <ToDoList 
                    key = {index}
                    id = {index}
                    myValList = {itemValue}
                    selectItem = {delItem} />
            })}
                
                </div>
            </div>
        </>
    )
}
export default App