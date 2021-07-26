import db from "../Firebase";

export const addTodo =(data)=>{
   db.collection("todos").add({
     todo:data
   })
        return{
            type:"addTodo",
            payload:{
                id:Math.random(),
                data:data
            }
        }    
}

export const showdata=(data)=>{
    return{
        type:"showdata"
    }
}

export const remove =(id)=>{
    return{
        type:"remove",
        id
    }
}
