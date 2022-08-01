import { ListService } from '../services/ListService'
import { List } from '../types/List'

export async function createList(list: List) {
  const service = new ListService()
  const newList: List = await service.createLists(list)

  return newList
}
