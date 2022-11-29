import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {Card} from './components/Card'

function App() {

  const [products, setProducts] = useState([
    {
      id: 0,
      brand: "Nike",
      name: "Brazil",
      priceDescount: "500",
      priceNormal: "1000",
      color: "Yellow",
      imageUrl: "https://imgnike-a.akamaihd.net/360x360/0226290L.jpg"
    },
    {
      id: 1,
      brand: "Nike",
      name: "France",
      priceDescount: "250",
      priceNormal: "700",
      color: "Blue",
      imageUrl: "https://imgnike-a.akamaihd.net/250x250/02315615.jpg"

    },
    {
      id: 2,
      brand: "Adidas",
      name: "Portugal",
      priceDescount: "200",
      priceNormal: "500",
      color: "Red and Green",
      imageUrl: "https://imgnike-a.akamaihd.net/250x250/023148P1.jpg"

    },
    {
      id: 3,
      brand: "Adidas",
      name: "Spain",
      priceDescount: "250",
      priceNormal: "600",
      color: "red",
      imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/92f4721437b24485b445aea6010e7c2a_9366/Camisa_1_Espanha_22_Vermelho_HL1970_21_model.jpg"

    },
    {
      id: 4,
      brand: "Adidas",
      name: "Argentina",
      priceDescount: "99",
      priceNormal: "300",
      color: "blue",
      imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f5660415c414b2c94d6ae83010a5343_9366/Camisa_2_Argentina_22_Azul_HF2159_21_model.jpg"

    },
  ])

  return (
    <ChakraProvider>
      {products.map((product)=>{
        return <Card 
        key={product.id}
        product={product}
        />
      })}
    </ChakraProvider>
  )
}

export default App
