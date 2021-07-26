import React, { useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, remove} from '../Actions/index';

const Todo = () => {
  const [input, setInput] = useState('');
  const list = useSelector((state) => state.TodoReducer.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder="Add items"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <i className="fa fa-plus add_btn" onClick={() => dispatch(addTodo(input), setInput(''))}></i>

          </div>
          <div className="showItems">
            {
              list.map((elem) => {
                return (
                  <>
                    <div className="eachItem" key={elem.id}>
                      <h3>{elem.data}</h3>
                      <i className="fa fa-trash-alt add_btn" style={{ color: 'black' }} onClick={() => dispatch(remove(elem.id))}></i>
                    </div>
                </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo;
