import star from "../star.png"
export default function Card(props){
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "Sold out"
    }else if(props.location === "Online"){
        badgeText = "online"
    }else{
        badgeText = "";
    }
    return (
        <div className="card dark">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.coverImg} alt="card1" />
            <div className="card-stats">
                <img className="star" src={star} alt="star-img" />
                <span >{props.rating}</span>
                <span className="grey">({props.stats.reviewCount}) * </span>
                <span className="grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

// map challenge
/*
Challenge one:
Given an array of numbers, return an array of each number, squared
SOLUTION*/
// const nums = [1, 2, 3, 4, 5];
// const squaredNums = nums.map(function(num){
//     return num * num
//     // Math.pow(num, 2);
// })
// console.log(squaredNums)

/**
 * challange two
 * Given an array of strings, return an array where the frst letter of each string is capitalized
 SOLUTION*/
//  const names = ["alice", "bob", "charlie", "danielle"];
//  const slicedNames = names.map(name => name[0].toUpperCase() + name.slice(1))
// console.log(slicedNames)

/**
 * challege three:
 * Given an array of strings, return an array of strings that wraps of the orginal strings in an HTML-like <p></p> tag;
 * E.G. Given ["Bulbasaur", "Charmander", "Squirtle"]
 * return [<p>"Bulbasaur"</p>,<p>"Charmander"</p> , <p>Squirtle"</p>"]
 */
// const pokeon = ["Bulbasaur", "Charmander", "Squirtle"];
// const mappedPokeon = pokeon.map(pokes =>{
//     return `<p>${pokes}</p>`;
// })
// // console.log(mappedPokeon);
// const nums = [1,2,3,4]
// nums.splice(1,2)
// const string = "I am a boy";
// const split = string.split(' ', 3)
// console.log(split)
