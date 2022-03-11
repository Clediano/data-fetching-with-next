import { useState } from 'react'
import { useRouter } from 'next/router'

import { api } from '../../services/api'
import { Content } from '../../components/Content'
import { Header } from "../../components/Header"
import { Pagination } from '../../components/Pagination'

export async function getStaticPaths() {
  return {
    paths: [
      { params: { page: '1' } },
      { params: { page: '2' } },
      { params: { page: '3' } },
      { params: { page: '4' } },
      { params: { page: '5' } }
    ],
    fallback: 'blocking' // bool or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { page } = context.params
  const { data } = await api.get(`/search?query=nature&page=${page}&per_page=5`)
  return {
    props: {
      ...data
    },
  }
}

const SSR = ({ photos, page }) => {
  const [text, setText] = useState('nature')
  const route = useRouter();

  return (
    <>
      <Header
        text={text}
        onChangeText={setText}
        onSearch={() => route.push(`/ISR/${1}?query=${text}`)}
      />
      <Pagination
        page={page}
        onNextPageClick={() => route.push(`/ISR/${page + 1}`)}
        onPreviousPageClick={() => route.push(`/ISR/${page - 1}`)}
      />
      <Content photos={photos} />
    </>
  );
};

export default SSR
