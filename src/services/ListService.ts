import { List } from "../types/List"
import { AxiosHttpClient } from "./AxiosHttpClient"

export class ListService extends AxiosHttpClient {
  async getLists(): Promise<List[]> {
    const { data } = await this.instance.get('/list')
    const lists: List[] = data.map(list => new List(list._id, list.name, list.items))

    return lists
  }

  async createLists(list: List): Promise<List> {
    const { data } = await this.instance.post('/list', list)
    const newList: List = new List(data._id, data.name, data.items)

    return newList
  }
}
