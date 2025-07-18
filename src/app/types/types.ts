interface IProducts {
    id: number,
    title: string,
    price: number,
    thumbnail: string
}
interface IUsers {
    id: number,
    firstName: string,
    lastName: string,
    email: string
    image: string
}
interface IRecipe {
    id: number,
    name: string,
    cuisine: string,
    rating: number
    image: string
}
interface IPost {
    id: number,
    title: string,
    body: string,
    views: number,
    reactions: any,
    likes: number,
    dislikes: number
}