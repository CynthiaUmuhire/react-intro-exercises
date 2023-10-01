
export default function App() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']


  return (
    <ul className="list-disc">
      {animals.map((animal,index) => {
        return <li key={index}> {animal}</li>
      })}
    </ul>
  )
}