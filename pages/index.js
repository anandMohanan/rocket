import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
export default function Home() {
  const [yes, setYes] = useState(false);

  console.log(yes);
  const onClick = () => {
    setYes(yes ? false : true)
  }
  return (
    // <div className="relative">
    //   <img src="/Backgroundlayer.png" alt='background' className="absolute top-0 left-0" />
    //   <img className="cursor-pointer absolute top-0 left-0  hover:shadow-outline object-fit h-100" src="/Buildingtowerandalll.png" />
    // </div>
    // <div className={styles.container}>
    <div>


      <div className=' '>
        <button onClick={onClick} className=" relative z-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Launch
        </button>
        <img className='absolute  w-screen  h-screen' src="/Backgroundlayer.png" />
        <img className='absolute inset-0  w-screen  h-screen' src="/Buildingtowerandalll.png" />
        {/* <img className='absolute inset-0  h-screen w-screen' src="/RocketOnly.png" /> */}
        <img className={yes ? ` ${styles.timefire} absolute transition-transform -translate-y-full ease-out lg:w-screen md:w-screen absolute z-10 inset-0  w-screen  h-screen ` : " "} src="/Fire.png" />
        <img className={yes ? ` ${styles.time} transition-transform -translate-y-full ease-out lg:w-screen md:w-screen absolute inset-0 z-20 w-screen  h-screen ` : "lg:w-screen md:w-screen absolute inset-0 z-20 w-screen  h-screen "} src="/RocketOnly.png" />

        {/* <div className='grid content-center'> */}



        {/* </div> */}
      </div>
      {/* </div> */}

    </div>
  )
}
