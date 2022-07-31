import { isEmpty, map } from 'lodash'
import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import EmptyList from '../components/EmptyList'
import ListUnit from '../components/ListUnit'
import { List } from '../types/List'
import { fetchLists } from '../useCases/fetchLists'

const Home: NextPage = () => {
  const [lists, setLists] = useState<List[]>()

  useEffect(() => {
    const getLists = async () => {
      const lists = await fetchLists()

      setLists(lists)
    }

    if (!lists) getLists()
  }, [])

  const generateList = useCallback(() => {
    const listsComponents = map(lists, (list: List) => (
      <ListUnit
        listName={list.name}
        itemCount={list.itemsCount()}
        key={list.id}
      />
    ))

    return listsComponents
  }, [lists])

  return isEmpty(lists) ? <EmptyList /> : generateList()
}

export default Home
