import { ItemUnit } from "./ItemUnit"

export type Item = {
  id: number
  quantity: number
  description: string
  unit: ItemUnit
}
