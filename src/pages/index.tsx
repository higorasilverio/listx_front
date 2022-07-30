import type { NextPage } from 'next'
import { useState } from 'react'
import EmptyList from '../components/EmptyList'

const Home: NextPage = () => {
  const [lists, setLists] = useState<any>(null)

  return lists ? lists : <EmptyList />
}

export default Home
