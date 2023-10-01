

const Card = ({ avatar,first_name, last_name, title }) => {
  return (
    <div className="bg-white border rounded-xl flex flex-col gap-3 items-center justify-center p-2">
      <img src={avatar} alt="" />
      <h1 className="font-bold">{`${first_name} ${last_name}`}</h1>
      <p className="font-light ">{title}</p>
    </div>
  )
}

export default Card