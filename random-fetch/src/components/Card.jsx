

const Card = ({ avatar,first_name, last_name, title,date_of_birth,email }) => {
  return (
    <div className="group h-96 w-80 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 bg-white border rounded-xl flex flex-col gap-3 items-center justify-center p-2">
          <img className="h-full w-full   shadow-xl " src={avatar} alt="" />
          <h1 className="font-bold">{`${first_name} ${last_name}`}</h1>
          <p className="font-light ">{title}</p>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">{date_of_birth}</h1>
            <p className="text-lg">{email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card


{/* <div className="flex min-h-screen items-center justify-center bg-slate-100">
  
</div> */}
