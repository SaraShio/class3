import Head from 'next/head'
import styles from '../styles/about.module.css'
import data from '../data/cats.json'
import { useState } from 'react'
import Card2 from '../components/Card2/index.js'
import Navbar from '../components/Navbar'


export default function About() {

    console.log(data);
    const [information, setInformation] = useState([...data]);

    return (
        <>

            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                <div className={styles.options}>
                    {
                        information && information.map((info, index) => {

                            return (
                                <Card2
                                    key={index}
                                    breed={info.breed}
                                    colour="bisque"
                                    font="32px"
                                    ageCat={info.age}
                                    name={info.catName}
                                />
                            )

                        })
                    }
                </div>
            </main>
        </>
    )
}

