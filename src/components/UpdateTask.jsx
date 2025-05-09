import { ref, set,getDatabase, update } from 'firebase/database'
import React , {useState} from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'


const UpdateTask = () => {

    const db = getDatabase();

    const navigate = useNavigate();


    const[updatemodel, setupdatemodel] = useState('')


    const handleedit = () =>{
        console.log(updatemodel)
        update(ref(db, 'products/'+id), {
            product:updatemodel
        })
        navigate('/add')
    }

    const {id} = useParams()
  return (
    <>
    <input onChange={(e)=>setupdatemodel(e.target.value)}className = 'border'type="text" />
    <button onClick = {handleedit} className='bg-blue-400 px-2 rounded'>Edit</button>
    </>
  )
}

export default UpdateTask