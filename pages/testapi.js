import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'
import React, { useState, useEffect } from 'react';
import { getPokemon } from "../lib/pokemon";

export default function TestApi() {

  useEffect(() => {
    // async function getPokemon() {
    //   const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    //   const data = res.json()
    //   console.log(data);
    // }

    const data = getPokemon()
    console.log(data);
  },[])
  

  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Finsen</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}