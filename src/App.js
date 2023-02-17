import { useState } from "react";
import "./App.css";
import React from "react";
import "./Auth/Components/AuthCard.css";

function App() {
  const [count, increament] = useState(0);
  const [posts, addPost] = useState([]);
  const api = "https://inshorts.deta.dev/news?category=";
  const fetchData = (e) => {
    var data = fetch(`${api}${e}`)
      .then((respnse) => respnse.json())
      .then((data) => {
        var newNews = data.data.map((e) => e);
        //newNews.push(data.data.map((e) => e));
        var news = newNews.map((e) => e);
        addPost(news);
        console.log("news", news);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("data", data);
  };

  const increamentCounter = () => {
    increament(count + 1);
  };

  const decreamentCounter = () => {
    increament(count - 1);
  };

  const resetCounter = () => {
    increament(0);
  };

  const getNews = (e) => {
    // let p = posts.map((e) => e);
    // p.push({
    //   id: `7 types of rainbows: Nature's mesmerizing optical phenomena`,
    //   title: `Rainbows are one of nature's most mesmerizing and awe-inspiring phenomena. Whether you're an engineer, scientist, artist, or simply someone who appreciates the beauty of nature, you most likely agree there is something captivating about rainbows that make them somewhat impossible to ignore. `,
    //   image:
    //     "https://www.historicmysteries.com/wp-content/uploads/2020/11/Bermuda-Triangle-1023x663.jpg",
    // });
    // addPost(p);
    fetchData(e);
  };

  return (
    <div className="App">
      <button className="App-Button" onClick={increamentCounter} color="red">
        Increament
      </button>{" "}
      <button className="App-Button" onClick={decreamentCounter} color="red">
        Decreament
      </button>{" "}
      <button
        className="App-Button"
        onClick={() => getNews("bollywood")}
        color="red"
      >
        Bollywood
      </button>
      <button
        className="App-Button"
        onClick={() => getNews("science")}
        color="red"
      >
        Science
      </button>
      {posts.map((post, index) => (
        <div key={index}>
          <div className="Post-Container">
            {" "}
            <img src={post.imageUrl} alt="" width={360}></img>{" "}
            <h1>{post.author}</h1>
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
