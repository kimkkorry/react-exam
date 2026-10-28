import { useState, useEffect } from "react";
import axios from "axios";

function Notice() {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        setPosts(res.data);
      } catch (err) {
        console.error("공지사항 불러오기 실패:", err);
      }
    };
    fetchPosts();
  }, []); 

 
  const filtered = posts.filter((post) => post.title.includes(keyword));

  return (
    <div style={{ textAlign: "center" }}>
      <h2>공지 사항</h2>
      <input
        className="search"
        type="text"
        placeholder="제목 검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <p>{filtered.length}건</p>
      <ul className="notice-list">
        {filtered.map((post) => (
          <li key={post.id}>
            <span className="notice-id">{post.id}.</span>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notice;
