import { useEffect } from "react"
import { motion } from "framer-motion"


const Image = ({ data }) => {
useEffect(() => {
  console.log(data)
}, [data])


  return (
    <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 30,
  }}
>
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} />
    </a>
    </motion.div>
  )
}

export default Image