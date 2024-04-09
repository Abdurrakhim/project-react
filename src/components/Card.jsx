function Card({id, img, price, text_one, text,}){
    return (
        <div className="card" id={id}>
            <img src={img} alt="" />
            <h3>{text_one}</h3>
            <h2>{price}</h2>
             <h3>{text}</h3>
             <button>add</button>
        </div>
    )
}

export default Card;