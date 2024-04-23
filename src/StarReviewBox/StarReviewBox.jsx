import './style.css'

const StarReviewBox = ({stars, stagger, name}) => {

    let stag = `ml-${stagger}`
    let cl = "px-8 text-yellow-400 bg-purple-400 p-[10px] flex justify-between mb-[10px] w-[450px] " + stag 
    
    var starDisplay = [];

    console.log(cl);

    for(let i=0; i < stars; i++){
        starDisplay.push(<i className="fa-solid fa-star"></i>)
        // starDisplay += 'S '
    }
    //fills the rest of the space with blank stars but not necessary
    for(let i = 5; i > stars; i--){
        starDisplay.push(<i className="fa-regular fa-star"></i>)
    }

    return(
        <div className={cl}>
            <div>
                {starDisplay} 

                {/* <i className="fa-solid fa-star"></i> */}
            </div>
            <p className='text-purple-900 font-bold'>Rated {stars} stars in {name}</p>
        </div>
    )
}

export default StarReviewBox