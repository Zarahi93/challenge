import React from "react";
import "./postlist.css";

export default function PostList() {
      const posts = [{ title: 'Post 1', body: "13123" }, { title: 'Post 2', body: "34534" }, { title: 'Post 3', body: "jfddcvbhjbbyuijn, cfvygbhnjkxdcfvgh" }, { title: ' Post 4', body: "45646765" },]
    return (
          <section className="post-list">
          { posts.map((post) => <article className="post" key={post.id} style={{ backgroundImage: `url("https://source.unsplash.com/random")`}}>
          <p className="title"> {post.title} </p>
          <p className="body">{post.body}</p>
        </article>)}
          </section>
    );
  }