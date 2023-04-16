type Book = {
    id: number,
    name: string,
    author: string,
    type: string,
    current_stock: number,
    price: number,
    available: boolean
  }

  type Order = {
    orderId:Text,
    bookId:number,
    accesstoken:string,
    customerName:string
  }
