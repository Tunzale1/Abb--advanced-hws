class Card {
  constructor(post) {
    this.post = post;
  }

  createElements() {
    const card = document.createElement("div");
    card.className = "card";

    const profile = document.createElement("div");
    profile.className = "profile";

    const container = document.createElement("div");
    container.className = "container";

    const del = document.createElement("button");
    del.className = "but";
    del.textContent = "x";
    del.addEventListener("click", () => this.delete());
    card.appendChild(del);

    const user = document.createElement("p");
    user.className = "user";
    user.textContent = this.post.user.name;
    container.appendChild(user);

    const email = document.createElement("span");
    email.className = "email";
    email.textContent = this.post.user.email;

    container.appendChild(email);
    profile.appendChild(container);

    const title = document.createElement("h4");
    title.className = "title";
    title.textContent = this.post.title;

    const text = document.createElement("p");
    text.className = "text";
    text.textContent = this.post.text;

    card.appendChild(profile);
    card.appendChild(title);
    card.appendChild(text);

    return card;
  }
  
delete() {
    fetch(`https://ajax.test-danit.com/api/json/posts/${this.post.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const x = document.getElementById(`post-${this.post.id}`);
          if (x) {
          x.parentNode.removeChild(x);
    }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function api() {
  Promise.all([
    fetch("https://ajax.test-danit.com/api/json/users"),
    fetch("https://ajax.test-danit.com/api/json/posts"),
  ])
    .then(([a, b]) => Promise.all([a.json(), b.json()]))
    .then(([a, b]) => display(a, b))
    .catch((error) => {
      console.error(error);
    });
}

function display(a, b) {
  const root = document.getElementById("page");
  b.forEach((post) => {
    const user = a.find((user) => user.id == post.userId);
    if (user) {
      const card = new Card({
        id: post.id,
        title: post.title,
        text: post.body,
        user: user,
      });
      const cardPost = card.createElements();
      cardPost.id = `post-${post.id}`;
      root.appendChild(cardPost);
    }
  });
}

api();
