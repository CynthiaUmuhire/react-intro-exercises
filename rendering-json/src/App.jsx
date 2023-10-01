import Card from "./components/Card";
import datas from "../src/assets/data.json"

export default function App() {

  return (
    <div className="bg-blue-300 flex gap-3 w-1/2 p-3 h-40 items-center justify-center">
      {datas.map((data)=>{
        return(
          <Card key={data.id} setup={data.setup} punchline={data.punchline} />
        )
      })}
    </div>
  )
}