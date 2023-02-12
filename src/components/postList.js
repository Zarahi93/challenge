import React from "react";
import PostItem from "./postItem";
import "./postlist.css";

export default function PostList() {
    const notes = [{ nota: "algo", id: 13123 }, { nota: "algo2", id: 34534 }, { nota: "algo3", id: 45656765 }, { nota: "algo4", id: 45646765 }];
   
    return (
          <section className="post-list">
          {notes.map((note) => <PostItem key={note.id} note={note} />)}
          </section>
    );
  }