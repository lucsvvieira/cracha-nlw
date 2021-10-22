const LinksSocialMedia = {
  github: "lucsvvieira",
  youtube: "UCvAibcR_y0Bic5-67xonqgA",
  facebook: "Kunvieira",
  instagram: "lucsvvieira",
  twitter: "lucsvvieira"
}

function changeSocialMediaLinks() {

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url).then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()