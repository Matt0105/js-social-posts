function postGenerator(container, posts) {
    
    for(let i = 0; i < posts.length; i++) {

        const post = document.createElement("div");
        post.classList.add("post");

        const postHeader = document.createElement("div");
        postHeader.classList.add("post__header");

        const postMeta = document.createElement("div");
        postMeta.classList.add("post-meta");

        const postMetaIcon = document.createElement("div");
        postMetaIcon.classList.add("post-meta__icon");

        const img = document.createElement("img");
        img.classList.add("profile-pic");
        img.src = `https://unsplash.it/300/300?image=${posts[i].profileImg}`;

        if(posts[i].profileImg == "" || posts[i].profileImg == null) {
            postMetaIcon.innerHTML = posts[i].author[0] + posts[i].author[posts[i].author.indexOf(" ")+1];
        }
        else {
            postMetaIcon.append(img);
        }

        const postMetaData = document.createElement("div");
        postMetaData.classList.add("post-meta__data");

        const postMetaAuthor = document.createElement("div");
        postMetaAuthor.classList.add("post-meta__author");
        postMetaAuthor.append(posts[i].author);

        const postMetaTime = document.createElement("div");
        postMetaTime.classList.add("post-meta__time");
        postMetaTime.append(posts[i].time.day + "/" + posts[i].time.month + "/" + posts[i].time.year);

        postMetaData.append(postMetaAuthor);
        postMetaData.append(postMetaTime);

        postMeta.append(postMetaIcon);
        postMeta.append(postMetaData);

        postHeader.append(postMeta);

        const postTxt = document.createElement("div");
        postTxt.classList.add("post__text");
        postTxt.append(posts[i].text);

        const postImg = document.createElement("div");
        postImg.classList.add("post__image");

        const img2 = document.createElement("img");
        img2.src = `https://unsplash.it/600/300?image=${posts[i].postImg}`;

        postImg.append(img2);

        const postFooter = document.createElement("div");
        postFooter.classList.add("post__footer");

        const likes = document.createElement("div");
        likes.classList.add("likes", "js-likes");

        const likesCta = document.createElement("div");
        likesCta.classList.add("likes__cta");

        const likeBtn = document.createElement("a");
        likeBtn.classList.add("like-button", "js-like-button");
        likeBtn.innerHTML = 
        `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>`;

        likesCta.append(likeBtn);

        const likesCounter = document.createElement("div");
        likesCounter.classList.add("likes__counter");
        likesCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone`;

        likes.append(likesCta);
        likes.append(likesCounter);

        postFooter.append(likes);

        post.append(postHeader);
        post.append(postTxt);
        post.append(postImg);
        post.append(postFooter);

        container.append(post);

        likeBtn.addEventListener("click", function() {

            if(!likeBtn.classList.contains("like-button--liked")) {
                likeBtn.classList.add("like-button--liked");
                posts[i].likes++;
                likesCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone`;
            }
            else {
                likeBtn.classList.remove("like-button--liked");
                posts[i].likes--;
                likesCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone`;
            }
        });

  
    }
}

const posts = [

    {
        author: "Phil Mangione", 
        profileImg: "2",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.", 
        postImg: "1084",
        likes: 80, 
        time: {
            day: 12,
            month: 1,
            year: 2019
        }
    },
    {
        author: "Matteo Gallitano", 
        profileImg: null,
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.", 
        postImg: "",
        likes: 120, 
        time: {
            day: 11,
            month: 2,
            year: 2021
        }
    },
    {
        author: "Livia Watson", 
        profileImg: "1",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.", 
        postImg: "1",
        likes: 270, 
        time: {
            day: 5,
            month: 5,
            year: 2020
        }
    }
];

const container = document.getElementById("container");

postGenerator(container, posts);



// const template = `
        //     <div class="post">
        //         <div class="post__header">
        //             <div class="post-meta">                    
        //                 <div class="post-meta__icon">
        //                     <img class="profile-pic" src="https://unsplash.it/300/300?image=${posts[i].profileImg}" alt="${posts.author}">                    
        //                 </div>
        //                 <div class="post-meta__data">
        //                     <div class="post-meta__author">${posts[i].author}</div>
        //                     <div class="post-meta__time">${posts[i].time.month + "/" + posts[i].time.day + "/" + posts[i].time.year}</div>
        //                 </div>                    
        //             </div>
        //         </div>
        //         <div class="post__text">${posts[i].text}</div>
        //         <div class="post__image">
        //             <img src="https://unsplash.it/600/300?image=${posts[i].postImg}" alt="">
        //         </div>
        //         <div class="post__footer">
        //             <div class="likes js-likes">
        //                 <div class="likes__cta">
        //                     <a class="like-button  js-like-button" href="#" data-postid="1">
        //                         <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        //                         <span class="like-button__label">Mi Piace</span>
        //                     </a>
        //                 </div>
        //                 <div class="likes__counter">
        //                     Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
        //                 </div>
        //             </div> 
        //         </div> 
        //     </div>`;