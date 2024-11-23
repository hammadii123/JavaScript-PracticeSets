// Global Variables
let selectedImgPath = '';
let postId = 0;

// Function to handle image selection
function selectedImage(src) {
    var imagesBg = document.getElementsByClassName('bg-image')
     for(var i = 0; i < imagesBg.length; i++) {
         imagesBg[i].className = 'bg-image'
     }
     event.target.classList.add('selectedImage')
     selectedImgPath = src
 }

// Function to handle post submission
function submitPost() {
    const userName = document.getElementById("username").value.trim();
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("desc").value.trim();
    const currentDateTime = new Date().toLocaleString();

    if (!userName) {
        alert("Username is required.");
        return;
    }

    if (!title) {
        alert("Post title is required.");
        return;
    }

    if (!description) {
        alert("Description is required.");
        return;
    }

    if (!selectedImgPath) {
        alert("Please select a background image.");
        return;
    }

    // Increment post ID
    postId++;

    // Create post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.setAttribute('data-post-id', postId);

    postElement.innerHTML = `
        <div class="post-header">
            <span class="post-user">${userName}</span>
            <span class="post-time">${currentDateTime}</span>
        </div>
        <div class="post-body" style="background-image: url('${selectedImgPath}');">
            <h5 class="post-title">${title}</h5>
            <p class="post-text">${description}</p>
        </div>
        <div class="reactions">
            <button class="reaction-btn" onclick="addReaction(${postId}, '👍')">👍 <span class="reaction-count" id="reaction-${postId}-👍">0</span></button>
            <button class="reaction-btn" onclick="addReaction(${postId}, '❤️')">❤️ <span class="reaction-count" id="reaction-${postId}-❤️">0</span></button>
            <button class="reaction-btn" onclick="addReaction(${postId}, '😂')">😂 <span class="reaction-count" id="reaction-${postId}-😂">0</span></button>
        </div>
        <div class="comments-section" id="comments-${postId}">
            <div class="comment-input-container">
                <input type="text" class="comment-input" placeholder="Add a comment..." onkeydown="handleComment(event, ${postId})">
            </div>
        </div>
    `;

    // Prepend the new post to the listing container
    const listingContainer = document.getElementById("listingContainer");
    listingContainer.prepend(postElement);

    // Reset the form
    document.getElementById("username").value = '';
    document.getElementById("title").value = '';
    document.getElementById("desc").value = '';
    selectedImgPath = '';
    const imagesBg = document.getElementsByClassName('bg-image');
    for (let img of imagesBg) {
        img.classList.remove('selectedImage');
    }
}

// Function to add reactions
function addReaction(id, reaction) {
    const countElement = document.getElementById(`reaction-${id}-${reaction}`);
    let count = parseInt(countElement.innerText);
    count++;
    countElement.innerText = count;
}

// Function to handle adding comments
function handleComment(event, id) {
    if (event.key === 'Enter') {
        const commentText = event.target.value.trim();
        if (commentText) {
            const commentsSection = document.getElementById(`comments-${id}`);
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <span class="comment-user">User:</span>
                <span class="comment-text">${commentText}</span>
            `;
            commentsSection.appendChild(commentElement);
            event.target.value = '';
        }
    }
}
