import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <div className="relative">
    //   <img src="/Backgroundlayer.png" alt='background' className="absolute top-0 left-0" />
    //   <img className="cursor-pointer absolute top-0 left-0  hover:shadow-outline object-fit h-100" src="/Buildingtowerandalll.png" />
    // </div>
    // <div className={styles.container}>

    <div className='relative grid h-screen '>
      {/* <button className="absolute left-10 top-10 z-40   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button> */}
      <img className='absolute  w-screen  h-screen' src="/Backgroundlayer.png" />
      <img className='absolute inset-0  w-screen  h-screen' src="/Buildingtowerandalll.png" />
      <img className='absolute inset-0  h-screen w-screen' src="/RocketOnly.png" />
    </div>
    // </div>
  )
}
