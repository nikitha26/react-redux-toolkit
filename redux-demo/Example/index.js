function msg(){
  function handleButton(){
    console.log("Click me");
  }
    render(
        <button onClick = {handleButton}>Click Me</button>
    )
}


function counter(){
    const [count,setCount] = useState(0);

    render(
        <div>
            <button onClick={() => setCount(count+1)}>Increment By 1</button>
          <Other count={count}/>
        </div>
        
    )
}

function Other(props){
    console.log(props.count)

}

function countLetter(){
   const[input, setInput] = useState({
    name:"",lname:""
   });
   
   function handleCount(){
     console.log();
   }
   function handleValues(name,value){
     setInput(ps => ({
        ...ps,
        [name]:value,
     }))
   }
   const handle = () => {

   }
    render(
        <div>
            <input type="text" onChange={(e) => handleValues(e.target.name,e.target.value)} name= 'Nikitha'/>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleCount}>Submit</button>
        </div>
    )
}

function Items({obj1:newObj ,obj2}){
    const[item,setItem] = useState(['a','b'])
    const newObj = obj1;
    
    render(
        item.map((v,index)=> {
            <h6 key={index}>{v}</h6>
        })
    )
}