import './App.css'
import Card from './components/Card.tsx';
import { ChaiCard } from './components/ChaiCard.tsx';
import { ChaiList } from './components/ChaiList.tsx';
import { Counter } from './components/Counter.tsx';
import { OrderForm } from './components/orderForm.tsx';

import type { Chai } from './types.ts';

const menu: Chai[] = [
  {id: 1, name: "Ginger", price: 30},
  {id: 2, name: "Masala", price: 20},
  {id: 3, name: "Lemon", price: 70},
]

function App() {
  return (
    <>
    <div>
      <h1>React Projects</h1>
      <ChaiCard name= "Headphone" price= {5000} />
      <ChaiCard name= "iPhone" price= {50000} />
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
      <OrderForm
        onSubmit={(order) =>{
          console.log("Placed", order.name, order .cups)  
        }}
      />
    </div>
    <div>
      <Card title='Chai aur typescript' footer = 
      {<button>Order Now</button>}/>
    </div>
    </>
  )
}

export default App;
