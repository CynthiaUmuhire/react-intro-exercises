import List from "./components/List";

export default function App() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']


  return (
    <ul className="list-disc list-inside p-2">
      {animals.map((animal, index) => {
        return <List key={index} name={animal} />
      })}
    </ul>
  )
}