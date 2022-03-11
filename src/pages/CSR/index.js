import { useEffect, useState } from 'react';

import { Pagination } from '../../components/Pagination';
import { Content } from '../../components/Content';
import { Header } from "../../components/Header"
import { api } from "../../services/api";

const CSR = () => {
  const [text, setText] = useState('nature')
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)

  const loadPhotos = async () => {
    const { data } = await api.get(`/search?query=${text || 'nature'}&page=${page}&per_page=5`)

    setPage(data.page)
    setPhotos(data.photos)
  }

  useEffect(() => {
    loadPhotos()
  }, [page])

  return (
    <>
      <Header
        text={text}
        onChangeText={setText}
        onSearch={loadPhotos}
      />
      <Pagination
        page={page}
        onNextPageClick={() => setPage(page + 1)}
        onPreviousPageClick={() => setPage(page - 1)}
      />
      <Content photos={photos} />
    </>
  );
};

export default CSR
