const fetchComments = async (fetchLink) => {
  const res = await fetch(fetchLink);
  
  if(res.ok){
    let comments = await res.json();     
    console.log(comments);
    comments = comments.slice(0,10)

    comments.forEach((comment) => {
      let span = document.createElement('span');
      span.className='comment';
      span.textContent=`Id nr ${comment.id}: ${comment.name}`
      document.getElementById('comments').appendChild(span);
    })

    
  } else {
    alert(`Cannot fetch data. Status: ${res.status}`);
  } 
}

fetchComments('https://jsonplaceholder.typicode.com/comments');
