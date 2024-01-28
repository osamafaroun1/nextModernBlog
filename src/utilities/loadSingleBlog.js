
const loadSingleBlog = async(id) => {
 const res = await fetch(`https://nextblog-qbfs.onrender.com/${id}`, {
    cache:'no-cache'
 });
 return res.json();
};

export default loadSingleBlog;