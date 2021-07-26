import db from "../Firebase";

const initialData ={
    list:[]
}
//const [list,setList]=useState([])
const TodoReducer = (state=initialData,action)=>{
    switch(action.type){
        case "addTodo" :
            const {id,data} =action.payload;  
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data

                }]
            }    

        case "showdata":
            db.collection("todos").onSnapshot(function (querySnapshot) {
                  querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    todo: doc.data().todo
                  }))
              });
        return{
            ...state

            }    

        case "remove" :
        const updatelist = state.list.filter((elem)=> elem.id !== action.id)  
        return{
             ...state,
             list:updatelist
        } 

      default:return state;
    }
}


export default TodoReducer;