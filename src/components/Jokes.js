export default function Jokes(props){
    return (
        <div>
            <h2>{props.setup}</h2>
            <h3>{props.punchline}</h3>
            {props.desc && <p>Desc:{props.desc}</p>}
        </div>
        
    )
}