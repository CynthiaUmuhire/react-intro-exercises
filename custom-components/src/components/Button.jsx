
const Button = ({name,message}) => {

    return (
        <button className="p-2 border bg-slate-400" onClick={() => alert(message)}>
            <p>{name}</p>
        </button>
    )
}

export default Button