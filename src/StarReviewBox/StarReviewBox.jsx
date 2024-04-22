<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

const StarReviewBox = ({stars}) => {
    
    var starDisplay = "";

    for(let i=0; i < stars; i++){
        // starDisplay += '<i class="fa-solid fa-star">S</i>'
        starDisplay += "S "
    }

    return(
        <div className="bg-purple-400 p-[10px] flex justify-between mb-[10px] w-[300px]">
            <div>
                {starDisplay}
                {/* <i className="fa-solid fa-star"></i> */}
            </div>
            <p>Rated {stars} stars in reviews</p>
        </div>
    )
}

export default StarReviewBox