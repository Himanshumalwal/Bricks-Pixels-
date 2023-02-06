import { useEffect } from "react"

const Image = ({ data }) => {
useEffect(() => {
  console.log(data)
}, [data])


  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} />
    </a>
  )
}

export default Image