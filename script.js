const apiKey = "5f3d97a59dcd4400b0fd42e1efca05aa"

const blogContainer = document.getElementById("blog-container");



async function fetchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=$(apiKey)`;
        const response = await fetch (apiUrl);
        const data = await response.json();
        //console.log(data);
        return data.articles;
    }catch(error){
        console.error("Error Fetching Random News", error);
        return[];
    }
}
 
function displayBlogs(articles){
    blogContainer.innerHTML = "";
    articles.forEach((article)=>{
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        title.textContent = article.title;
        const description = document.createElement ("p");
        description.textContent = article.description;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogContainer.appendChild(blogCard);
    });
}

(async () => {
    try{
        const articles = await fetchRandomNews();
        displayBlogs(articles);
        //console.log(articles);
    }catch(error){
        console.error("Error fetching random news", error);
    }
})();