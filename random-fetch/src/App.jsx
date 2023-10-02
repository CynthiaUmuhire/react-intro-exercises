import { useEffect, useState } from "react";
import Card from "./components/Card"


export default function App() {
  let [images, setImages] = useState([])
  const fetchImage = () => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].avatar);
        console.log(data[0].first_name);

        return setImages(data)
      })
  };
  useEffect(() => {
    fetchImage;
  }, [])
  console.log(images);

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <button className="bg-pink-950 p-3 text-center " onClick={fetchImage}>
        Random Fetch
      </button>
      <div className=" grid grid-cols-2 grid-rows-2  bg-blue-300 gap-3 w-1/2 p-3">
        {images.map((image) => {
          return (<Card key={image.id} avatar={image.avatar} first_name={image.first_name} last_name={image.last_name} title={image.employment.title} date_of_birth={image.date_of_birth} email={image.email} />)
        })}
      </div>
    </div>
  )
}