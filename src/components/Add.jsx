import React , {useEffect, useState} from 'react'
import { getDatabase, ref, set, push , onValue, remove } from "firebase/database";
import { useNavigate } from 'react-router';


const Add = () => {

    const db = getDatabase();
    const navigate = useNavigate()

    const[productadd, setproductadd] = useState('')
    const[productlist , setproductlist] = useState([])
    const[loading, setloading] = useState(true)
    const[updatemodel, setupdatemodel] = useState(false)


    //for writing data
    const handleinput =(e) =>{
        setproductadd(e.target.value)
    }

    const handlesubmit = () =>{
        const db = getDatabase();
        set(push(ref(db, 'products/')), {
          product: productadd,
          
        }).then(() => {
            console.log("Product Added")
            setproductadd("")
            
        }).catch((error) => {
            console.log(error)
        });
    }

    //for reading data

    function fetchData(){
        
        const productCountRef = ref(db, 'products/');
onValue(productCountRef, (snapshot) => {
  const data = snapshot.val();
//   console.log(data)
let array = []
snapshot.forEach((item) =>{
    console.log(item.key)
    // console.log(item.val())
    array.push({...item.val(), id:item.key})
    setproductlist(array)
    setloading(false)
})

// console.log(array);
  
});

    }

    useEffect(() => {

        fetchData()
     

    } , [])

    //for deleting data
    const handleDelete = (id) =>{
        remove(ref(db, 'products/' + id))
        
    }

    //for updating data
    const handleedit = (id) =>{
        setupdatemodel(true)
        console.log(id)
        navigate(`/edit/${id}`)
        // console.log('kill')
    }

  
// });



console.log(productlist)



  return (
    <div className="container">

        {updatemodel ?
        <>
        <h1>Updating</h1>

        <input className="border" type="text" /></> 
        
    :
    <section>
            <input onChange={handleinput} value={productadd} className='border  mt-2' type="text" /><button onClick={handlesubmit} className='ms-3 mt-5 border px-2 rounded'>Add</button>


{loading ? 
<h1>Loading...</h1>
:
            <ul>

                {productlist.map((item , i) =>(
                    
                        <li>{i+1}.{item.product}{console.log(item)}  <button onClick= {() =>{handleDelete(item.id)}}className='border px-2 rounded bg-red-500'>Delete</button> <button onClick = {() =>{handleedit(item.id)}} className='bg-blue-400 px-2 rounded'>Edit</button></li>

                    
                ))}
            </ul>
}
        </section>
    }
        
    </div>
  )
}

export default Add