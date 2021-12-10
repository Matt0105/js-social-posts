const posts = [

    {
        author: "Phil Mangione", 
        profileImg: "15",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.", 
        postImg: "171",
        likes: 80, 
        time: {
            day: 12,
            month: 1,
            year: 2019
        }
    }
];

const container = document.getElementById("container");

for(let i = 0; i < posts.length; i++) {
    
    const template = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=${posts[i].profileImg}" alt="${posts.author}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author}</div>
                        <div class="post-meta__time">${posts[i].time.month + "/" + posts[i].time.day + "/" + posts[i].time.year}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].text}</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=${posts[i].postImg}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div> 
        </div>`;

    container.innerHTML += template;
}