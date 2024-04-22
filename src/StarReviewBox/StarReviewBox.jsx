const StarReviewBox = ({stars}) => {
    
    var starDisplay = "";

    for(let i=0; i < stars; i++){
        starDisplay += '<i class="fa-solid fa-star">S</i>'
    }

    return(
        <div className="bg-purple-400 p-[10px] flex justify-between">
            <div>
                {starDisplay}
                {/* <i className="fa-solid fa-star"></i> */}
            </div>
            <p>Rated {stars} stars in reviews</p>
        </div>
    )
}

export default StarReviewBox