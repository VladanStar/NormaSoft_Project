import "./App.css";
import { useEffect, useState, useMemo } from "react";

function App() {
  const [postsDogs, setPostsDogs] = useState([]);
  const postProvider = useMemo(
    () => ({
      postsDogs,
      setPostsDogs,
    }),
    [postsDogs, setPostsDogs]
  );

  useEffect(() => {
    // fetching posts for feed
    const fetchPosts = async () => {
      fetch("https://dummyapi.io/data/v1/post", {
        headers: {
          "app-id": "616ddd0c2a8ff6018ca5b17d",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPostsDogs(data.data);
        });
    };

    fetchPosts();
  }, []);
  return <div className="App"></div>;
}

export default App;
