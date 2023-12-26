import { useState } from "react";

export default function App() {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newComent = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date(),
    };
    setComments((state) => [newComent, ...state]);
    setAuthor("");
    setContent("");
  };
  return (
    <div id="app">
      <h2>Seção de comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="autor">Email</label>
        <input
          type="text"
          id="autor"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="content">Comentários</label>
        <textarea
          id="content"
          cols="30"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button>Enviar comentários</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.author}</h3>
              <span>Em {comment.createdAt.toLocaleString()}</span>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </section>
    </div>
  );
}
