import { useRouter } from 'next/router'
import { useState } from 'react'

import { Content } from '../../components/Content'
import { Header } from "../../components/Header"
import { api } from '../../services/api';

export async function getStaticProps() {
  const { data } = await api.get(`/search?query=nature&per_page=5`)
  return {
    props: {
      ...data
    },
    revalidate: 10
  }
}

const SSG = ({ photos }) => {
  return (
    <>
      <Header />
      <Content photos={photos} />
    </>
  );
};

export default SSG
