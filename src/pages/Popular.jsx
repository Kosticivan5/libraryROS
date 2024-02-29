import { books } from "../data";

const Popular = () => {
  return (
    <section className="popular">
      {books.map((book, idx) => {
        const { link, img } = book;
        return (
          <a
            className="book"
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="book-img" src={img} alt={`Image ${idx + 1}`} />
          </a>
        );
      })}
    </section>
  );
};
export default Popular;
