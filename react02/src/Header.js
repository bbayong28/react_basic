export default function Header(props) { 
    return (
        <>
            <div style={props.style}>
                {props.name}는 {props.age}
            </div>
        </>
    )
}