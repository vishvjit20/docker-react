import useFetch from "../hooks/use-fetch";

const PostLists = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(data, error);

  return loading ? <div>Loading...</div> : <div>Post Lists</div>;
};

export default PostLists;
