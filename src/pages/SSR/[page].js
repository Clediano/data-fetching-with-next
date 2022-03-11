import { useState } from 'react'
import { useRouter } from 'next/router'

import { api } from "../../services/api"
import { Header } from "../../components/Header"
import { Content } from '../../components/Content'
import { Pagination } from '../../components/Pagination'

export async function getServerSideProps(context) {
  const { page, query } = context.query
  const { data } = await api.get(`/search?query=${query || 'nature'}&page=${page}&per_page=5`)
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
        onSearch={() => route.push(`/SSR/${1}?query=${text}`)}
      />
      <Pagination
        page={page}
        onNextPageClick={() => route.push(`/SSR/${page + 1}?query=${text}`)}
        onPreviousPageClick={() => route.push(`/SSR/${page - 1}?query=${text}`)}
      />
      <Content photos={photos} />
    </>
  );
};

export default SSR
