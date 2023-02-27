// // import React from 'react'
// // // import './App.css'
// // // import Home from './containers/Home'
// // import Home from './components/Home';

// // class App extends React.Component {
// //     render() {
// //         return (
// //             <div>
// //                 {/* <Home name="ghous" email="ghous@gmail.com" /> */}
// //             </div>
// //         )
// //     }
// // }

// // export default App;


// // React Hooks

// import React, { useState } from 'react'

// function App() {
//     const [name, setName] = useState('Noman')
//     const [email, setEmail] = useState('noman@gmail.com')
//     const [arr, setArr] = useState(['Car'])
//     // const[obj, setObj] = useState({
//     //     name:'ashfaq',
//     //     city:'karachi'
//     // })

//     const handleClick = ()=>{
//         // setArr("Bike")
//         setArr([...arr, 'green','red','bikyea'])
//         // setObj({
//         //     name:'ahad',
//         //     city:'islamabad',
//         //     ...obj,
//         //     course:'web and app'
//         // })
//         // console.log(obj)
//     }
//     return (

//         <div>
//             <ul>
//                 {arr.map((v,i) => {
//                     return <li key={i}>{v}</li>
//                 })}
//             </ul>
//             <h1>Home Component</h1>
//             {/* <h2>
//                 {obj.name}
//             </h2> */}
//             <h2>{name}{email}</h2>
//             {/* <button onClick={()=>setName('Ahmed')}>Update</button> */}
//             <button onClick={handleClick}>Update</button>

//         </div>

//     )
// }

// export default App;





import React from 'react'
import AppRouter from './config/router';
import Navbar from './containers/Navbar';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './components/Home'
import Footer from './containers/Footer';


function App() {
    return (    

        <div>
            <Navbar />
     
            <AppRouter />

            <Footer />
   
        </div>
 )
}

export default App;