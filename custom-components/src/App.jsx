import Button from "./components/Button";

export default function App() {
  return (
    <div className=" flex gap-2">
      <Button name="Button 1" message="You clicked on button 1" />
      <Button name="Button 2" message="You clicked on button 2" />
      <Button name="Button 3" message="You clicked on button 3" />
    </div>
  )
}