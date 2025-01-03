const Card = ({ title, price, tag, srcImage }) => {

  const containerStyle = "bg-white cursor-pointer w-56 h-60 rounded-lg"
  const figureStyle = "relative mb-2 w-full h-4/5"
  const tagStyle = "absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs px-3 py-1 m-2"
  const imgStyle = "w-full h-full object-cover rounded-lg"
  const addStyle = "absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full bg-white/60 m-2 p-1"

  return (
    <div className= { containerStyle }>
        <figure className= { figureStyle }>   
            <span className= { tagStyle }> { tag } </span>
            <img className= { imgStyle } src= { srcImage } alt=""/>
            <div className= { addStyle }> + </div>
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light"> { title } </span>
            <span className="text-lg font-medium"> ${ price } </span>
        </p>
    </div>
  );
}


export { Card };