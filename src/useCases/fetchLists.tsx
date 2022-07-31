import { ListService } from '../services/ListService'
import { List } from '../types/List'

export async function fetchLists() {
  const service = new ListService()
  const lists: List[] = await service.getLists()

  return lists
}
