const posts = [
    {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "feeling a little bit dizzy",
      likes: 21,
    },
    {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "I'm feeling a bit stressed tbh",
      likes: 4,
    },
    {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment:
        "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152,
    },
  ];
  
  const heartIcon = document.getElementById("heart-icon");
  
  function handleclickHeart() {
    let count = parseInt(document.querySelector(".number-of-likes").innerHTML);
  
    count++;
    document.querySelector(".number-of-likes").innerHTML = `${count} likes`;
  
  }
  
  function render(posts, i) {
    {
      let htmlContetnt = `  <div class="artist-info row ">
            <div class="artist-img-div"><img class= "artist-img" src="${posts[i].avatar}" alt=" " ></div>
            <div class="artist-text ">
               <p class="artist-name">${posts[i].name}</p> 
               <p>${posts[i].location}</p>
            </div>
        </div>
        <div class="artwork">
            <img class= "paitning"src="${posts[i].post}"  id = "painting" width="100%" data-src = "${posts[i].post}" alt="artist's self-portrait">
        </div>
        <div class="likes-comments col">
            <div class="heart-other-icons row">
             <img src="images/icon-heart.png" alt="" class="icons" id="heart-icon">
             <img src="images/icon-comment.png" alt="" class="icons">
             <img src="images/icon-dm.png" alt="" class="icons">
            </div>
            <div class="number-of-likes">${posts[i].likes} likes</div>
            <p class="comments"><span>viney4532</span>${posts[i].comment}</p>
  
        </div>`;
  
      document.querySelector("main").innerHTML = htmlContetnt;
    }
  }
  
  document.addEventListener("click", (e) => {
    let i = "";
    if (e.target.id === "painting") {
      const targetSrc = e.target.dataset.src;
  
      i = posts.findIndex((el) => el.post === targetSrc);
  
      console.log(i);
  
      if (i === posts.length - 1) {
        render(posts, 0);
      } else if (i < posts.length - 1) {
        i++;
        render(posts, i);
      }
    } else if (e.target.id === "heart-icon") {
      handleclickHeart();
    }
  });
  