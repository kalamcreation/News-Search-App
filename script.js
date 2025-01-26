const apikey = '5f3d97a59dcd4400b0fd42e1efca05aa'

const blogContainer = document.getElementById("blog-container");



async function fetchRandomNews(){
    try{
        const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=$(apikey)';
        const response = await fetch (apiUrl);
        const data = await response.json();
        console.log(data);

    }catch(error){
        console.error("Error Fetching Random News", error);
        return[];
    }
}

async()=>{
    try{
        const articles = await fetchRandomNews();
        console.log(articles);
    }catch(error){
        console.error("Error fetching random news", error);
    }
}