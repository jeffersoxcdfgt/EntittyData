import { User } from "src/app/user/model/user";
import { Book } from "../model/book";

export const usersBooks = (users: User[], books: Book[]) => {
    return books.map((book: Book) => {
      return users
        .filter((user: User) => user.id.toString() === book.userId.toString())
        .map((myuser:User)=> ({
          iduser: myuser.id,
          nameuser: myuser.name,
          ...book
        }))
    }).reduce((a, b) => {
        return a.concat(b);
    }, []);
  }