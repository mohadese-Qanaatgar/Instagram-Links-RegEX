const commentText = 'i love @mohadese and @me'

let linkRegex = /@([\w\.]+)/g


let newCommentText = commentText.replace(linkRegex ,function(result) {

    return `<a href=${result}>${result}</a>`
})

document.body.innerHTML = newCommentText
console.log(newCommentText);
