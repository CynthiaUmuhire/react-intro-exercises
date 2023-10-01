
const Card = ({setup,punchline}) => {
  return (
    <div className="bg-white border rounded-xl flex flex-col gap-3 items-center justify-center p-2">
      <h1 className=" font-bold text-xl text-center">{setup}</h1>
      <p className=" text-lg">{punchline}</p>
    </div>
  )
}

export default Card
