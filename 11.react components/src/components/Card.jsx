 
const Card = (props) => {
  return (
    <div className="card">
      <div className="img-box">
          <img src={props.img} />
        </div>
        <h1 className="card-title"> Title: {props.title}</h1>
        <p>Characters: {props.characters.map((c) => <p>{c}</p>)}</p>        
        <p> {props.description} </p>
        <button className="btn" onClick={()=> props.action(props)}>button</button>
    </div>
  )
}

export default Card