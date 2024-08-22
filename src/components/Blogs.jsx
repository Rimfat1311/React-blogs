import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=65b45edc0d5d4f90ad82ceb6327218d5&pageSize=5"
    )
     .then((response) => response.json())
      .then((data) => {
        setBlogs(data.articles);
        console.log("this is what i logging", data);
      })
      .catch((error) => {
        console.error("Error fetching the news:", error);
      });
  }, []);

  // Function to handle "Read More" click
  // const handleReadMore = (article) => {
  //   setSelectedArticle(article);
  // };

  return (
    <div className="w-full h-screen bg-white p-16">
      <h1 className="md:text-3xl text-2xl font-bold text-blue-950 text-center mt-2 mb-8">
        Welcome to Our Blog
      </h1>
      <hr className="my-2 pb-10 border-gray-600 "/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs && blogs.map((blog, index) => (
          <div key={index} className="flex flex-col p-5 bg-slate-200 rounded-lg">
              <img src={blog.urlToImage} alt="" />
             <h2 className="font-bold">{blog.title}</h2> 
            <h3>{blog.content}</h3> 
           <h4>{blog.description} </h4> 
             <h5>{blog.id}</h5> 
             <p>{blog.author}</p>
              <h6>{blog.publishedAt}</h6>  
            
            <a href={blog.url} className="px-5 py-2 bg-gray-600 text-white hover:bg-gray-500 
        focus:outline-none focus:ring-5 focus:ring-gray-500 focus:ring-offset-5">Read</a>
          </div>
        ))}
      </div>

      {/* {selectedArticle && (
        <div className="mt-8 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
          <img
            src={selectedArticle.urlToImage}
            alt={selectedArticle.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p>{selectedArticle.content}</p>
        </div>
      )} */}
    </div>
  );
};

export default Blogs;