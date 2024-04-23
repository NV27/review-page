import './style.css'

const WordReviewBox = ({name, words, stagger}) => {

    let stag = ` mb-${stagger}`;
    let cl = "bg-purple-600 p-[20px] w-[350px] flex flex-col text-white" + stag;

    return(
        <div className={cl}>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-pink-400 mb-[10px] font-bold">Verified Buyer</p>
            <p className="text-left">{words}</p>
        </div>
    )
}

export default WordReviewBox