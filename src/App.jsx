import { Description } from './Description';
import { Book } from './Book';
import book1 from './assets/book1.png';
import book2 from './assets/book2.png';
import book3 from './assets/book3.png';
import book4 from './assets/book4.png';
import book5 from './assets/book5.png';
import { useState } from 'react';
import { getBooks } from './resources';

function App() {
  const [title, setTitle] = useState('Please select a book!');
  const [details, setDetails] = useState({
    body: 'Welcome to ByteBook. A virtual library designed to provide support to beginner software developers',
  });

  const changePage = (e) => {
    e.preventDefault();
    const book = getBooks(e.target.title);
    setDetails(book);
    setTitle(book.title);
  };

  return (
    <div className="flex flex-col  items-center justify-start gap-10 bg-gray-700 min-h-screen text-white">
      <div className=" py-5 flex items-center flex-col justify-between gap-10 ">
        <h1 className=" text-5xl  max-w-52 text-center" title="home">
          ByteBook
        </h1>
        <h2 className="text-xl ">{title}</h2>
      </div>
      <div className="flex items-center">
        <Book title="book1" src={book1} changePage={changePage} />
        <Book title="book2" src={book2} changePage={changePage} />
        <Book title="book3" src={book3} changePage={changePage} />
        <Book title="book4" src={book4} changePage={changePage} />
        <Book title="book5" src={book5} changePage={changePage} />
      </div>

      <Description book={details} />
    </div>
  );
}

export default App;
