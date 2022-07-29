import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import EmptyList from '../components/EmptyList'
import ListUnit from '../components/ListUnit'

const Home: NextPage = () => {
  const [render] = useState<boolean>(true)
  const [lists, setLists] = useState<any>(null)

  useEffect(() => {
    if (render) {
      const array = new Array(10)
      array.fill('')
      setLists(() =>
        array.map((item, index) => (
          <ListUnit listName={`List ${index}`} key={`item-${index}`} />
        ))
      )
    }
  }, [render])

  return render ? lists : <EmptyList />
}

export default Home
