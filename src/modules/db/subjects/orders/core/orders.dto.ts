export interface IOrderDto {
  _id?: string
  date: string
  group: string
  title: string
  price: number
  amount: number
  vendor: string
  seller: string
  link: string
  markers: []
  text: string
}
