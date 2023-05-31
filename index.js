const dataObj = {
    "currentUser": {
      "image": { 
        "png": "./images/avatars/image-juliusomo.png",
        "webp": "./images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    },
    "comments": [
      {
        "id": 1,
        "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
          "image": { 
            "png": "./images/avatars/image-amyrobson.png",
            "webp": "./images/avatars/image-amyrobson.webp"
          },
          "username": "amyrobson"
        },
        "replies": []
      },
      {
        "id": 2,
        "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        "createdAt": "2 weeks ago",
        "score": 5,
        "user": {
          "image": { 
            "png": "./images/avatars/image-maxblagun.png",
            "webp": "./images/avatars/image-maxblagun.webp"
          },
          "username": "maxblagun"
        },
        "replies": [
          {
            "id": 3,
            "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            "createdAt": "1 week ago",
            "score": 4,
            "replyingTo": "maxblagun",
            "user": {
              "image": { 
                "png": "./images/avatars/image-ramsesmiron.png",
                "webp": "./images/avatars/image-ramsesmiron.webp"
              },
              "username": "ramsesmiron"
            }
          },
          {
            "id": 4,
            "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt": "2 days ago",
            "score": 2,
            "replyingTo": "ramsesmiron",
            "user": {
              "image": { 
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
            }
          }
        ]
      }
    ]
  }

const comments=dataObj.comments

comments.forEach((comment)=>{
    printComment(comment)
})

function printComment(comment){
    
    const container= document.getElementsByClassName("container")[0]
    
    const card=document.createElement("div")
    card.className="card"
    card.id=comment.id

    const votes=document.createElement("div")
    votes.className="votes"
    const plusIcon=document.createElement("img")
    plusIcon.src="./images/icon-plus.svg"
    plusIcon.addEventListener("click",handleVotes)
    plusIcon.alt="+"
    plusIcon.className="inc"
    const span=document.createElement("span")
    span.textContent=comment.score
    const minusIcon=document.createElement("img")
    minusIcon.addEventListener("click",handleVotes)
    minusIcon.alt="-"
    minusIcon.className="dec"
    minusIcon.src="./images/icon-minus.svg"
    votes.appendChild(plusIcon)
    votes.appendChild(span)
    votes.appendChild(minusIcon)
    card.appendChild(votes)

    const main=document.createElement("div")
    main.className="main"

    const profile=document.createElement("div")
    profile.className="profile"

    const section1=document.createElement("div")
    section1.className="section1"
    const dp=document.createElement("img")
    dp.className="dp"
    dp.src=comment.user.image.png
    const author=document.createElement("span")
    author.textContent=comment.username
    const time=document.createElement("span")
    time.textContent=comment.createdAt
    section1.appendChild(dp)
    section1.appendChild(author)
    section1.appendChild(time)
  

    const section2=document.createElement("div")
    section2.className="section2"
    const replyIcon=document.createElement("img")
    replyIcon.src="/images/icon-reply.svg"
    const replyText=document.createElement("span")
    replyText.textContent="Reply"
    section2.appendChild(replyIcon)
    section2.appendChild(replyText)

    profile.appendChild(section1)
    profile.appendChild(section2)
    main.appendChild(profile)

    const p=document.createElement("p")
    p.className="comment"
    p.textContent=comment.content
    main.appendChild(p)
    card.appendChild(main)

    container.appendChild(card)

}

function handleVotes(event){
  const opertaion=event.target.alt

  if(opertaion=="+"){
    const voteElement=event.target.nextElementSibling
    voteElement.textContent=parseInt(voteElement.textContent)+1
    event.target.style.pointerEvents="none"
    event.target.nextElementSibling.nextElementSibling.style.pointerEvents="auto"

  }
  else{
    const voteElement=event.target.previousElementSibling
    voteElement.textContent=parseInt(voteElement.textContent)-1
    event.target.style.pointerEvents="none"
    event.target.previousElementSibling.previousElementSibling.style.pointerEvents="auto"

  }

}