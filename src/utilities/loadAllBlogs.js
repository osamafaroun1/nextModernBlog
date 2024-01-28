
const loadAllBlogs = async() => {
    const res = await fetch("https://nextblog-qbfs.onrender.com/blogs", {
        cache: 'no-cache'
    });
    // console.log(res, "Hello from");
    return res.json();
};

export default loadAllBlogs;