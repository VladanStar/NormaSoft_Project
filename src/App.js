import { useState, useMemo, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddPost from './components/AddPost'
import EditPost from './components/EditPost'
import Feed from './components/Feed'
import PostDetails from './components/PostDetails'
import { PostsContext } from './context/PostsContext'


function App() {
  const [postsDogs, setPostsDogs] = useState([]);
  const postsProvider = useMemo(
    () => ({
      postsDogs,
      setPostsDogs,
    }),
    [postsDogs, setPostsDogs]
  );

  useEffect(() => {
    // fetching posts for feed
    const fetchDogs = async () => {
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

    fetchDogs();
  }, []);
  useEffect(() => {
		window.localStorage.setItem('postsDogs', JSON.stringify(postsDogs))
	}, [postsDogs])



	return (
		<div className="App">
			<div className="not-feed"></div>
			<div className="feed flex flex-col p-1 max-w-full">
				<PostsContext.Provider value={postsProvider}>
					<BrowserRouter>
						<Switch>
							<Route path="/add" component={AddPost} exact />
							<Route path="/:id" component={PostDetails} exact />
							<Route
								path="/:id/edit"
								component={EditPost}
								exact
							/>
							<Route path="/" component={Feed} exact />
						</Switch>
					</BrowserRouter>
				</PostsContext.Provider>
			</div>
			<div className="not-feed"></div>
		</div>
	)
}



export default App;
