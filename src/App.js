

import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import "./styles/App.css"
import { nanoid } from "nanoid"
import Footer from "./components/Footer"
import Confetti from "react-confetti"



const data = [{
  name: "Ishaan BS",
  img: "https://scontent.fblr2-1.fna.fbcdn.net/v/t1.18169-9/10906046_1524094574534558_8497463869208102659_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=dQkssBytuZ0AX8G46HI&tn=yVP-jmNCRebw8-Sx&_nc_ht=scontent.fblr2-1.fna&oh=00_AT_t7_nh_ZKUAgZ-ZtoXASr6VFTAPfuzyDhLR-hDCffy6w&oe=62174AF7",
  id: nanoid(),
  confetti:false
},

{
  name: "Raghavedra Ritti",
  img: "https://scontent.fblr2-1.fna.fbcdn.net/v/t1.18169-9/p206x206/17796485_1309283335821827_2146529919614063526_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=da31f3&_nc_ohc=0_vvqGHwOU4AX_q7hwT&_nc_ht=scontent.fblr2-1.fna&oh=00_AT__DKJiYoPf45DZ5xlJINg5aPm6L-NGGLFfq0PSCCP8rw&oe=621532A3",
  id: nanoid(),
  confetti:false
},

{
  name: "Chirag",
  img: "https://scontent.fblr2-1.fna.fbcdn.net/v/t1.18169-9/16114295_1226120477471447_6175668507531397684_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=otw9EapJU9QAX9HFEhb&_nc_ht=scontent.fblr2-1.fna&oh=00_AT9VBBDnLS4yKBBx_KTZW8DhjEaiU4jPXONVYAjNdsm5TQ&oe=621594BC",
  id: nanoid(),
  confetti:false
},

{
  name: "Chinthan",
  img: "https://scontent.fblr2-1.fna.fbcdn.net/v/t31.18172-8/10920097_677043529107641_1186821460797390198_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jCe8tc04wgsAX-uUv1z&_nc_ht=scontent.fblr2-1.fna&oh=00_AT-K95dZuEgj0xNahNyCb7KvdhHnxeGU6rph1FeMyO9MOA&oe=62177021",
  id: nanoid(),
  confetti:false
},

{
  name:"Shreyas",
  img:"https://scontent.fblr2-1.fna.fbcdn.net/v/t1.18169-9/18157128_642352672629531_7997694524446194269_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=bB01BVQo-mgAX-9D4Nq&_nc_ht=scontent.fblr2-1.fna&oh=00_AT_Y8V0Pla_NJD4tcNLCUe2x8ayiEMOg-dVAev8fxBZc5w&oe=6216CF4E",
  id:7,
  confetti:true
}

]

const newBody = data.map(items => <Body items={items} key={items.id} />)
var i=0;


function App() {

  function slider(){
    i++; 
    console.log(i)
    setPerson(i<data.length?newBody[i]:newBody[0])
    if(i>=data.length)
    {
      i=0;
    }
  }
  const [person, setPerson] = React.useState(newBody[i])
 
  return (
    <div className="container">
      <Header />
      {person}
      <Footer 
      toggle={slider}/>

    {data[i].confetti&&<Confetti />}
  
    </div>
  )
}

export default App;
