const authToken = "ghp_chlIuS577EtrtANTI_REMOVEtDh9nqpQ1pKqeAHK71NE5kZ".replace("ANTI_REMOVE","")

const repoUrl = `rahmatagungj/indonesia-komandan-paskibraka`
const mainReadmeAPI = `https://raw.githubusercontent.com/${repoUrl}/master/README.md`
const pullRequestAPI = `https://api.github.com/repos/${repoUrl}/pulls?state=all`

const converter = new showdown.Converter()
function getQuestionDetails() {
  fetch(mainReadmeAPI)
    .then((response) => response)
    .then((data) => {
      data.text().then((text) => {
        const question = converter.makeHtml(text)
        document.getElementById("question-details").innerHTML = question
      })
    })
}

function renderStatus(pull) {
  if (pull.merged_at !== null) {
    return `<span class="badge bg-success ms-2">Accepted</span>`
  } else if (pull.state === "closed") {
    return `<span class="badge bg-danger ms-2">Declined</span>`
  } else {
    return `<span class="badge bg-primary ms-2">On Review</span>`
  }
}

// Get data from github
function getPullData() {
  fetch(pullRequestAPI, {
    headers: {
      Authorization: `token ${authToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length <= 0) {
        document.getElementById("pull-request").innerHTML +=
          "Tidak ada solusi yang dikirim"
      } else {
        console.log(data)
        data.sort((a, b) => {
          return a.number - b.number
        })

        data.forEach((pull) => {
          const pullRequest = `
        <div class="accordion-item">
        <h2 class="accordion-header" id="${pull.user.login}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${
          pull.user.login + pull.id
        }" aria-expanded="false" aria-controls="${pull.user.login + pull.id}">
        
        <img src="${pull.user.avatar_url}" class="user-avatar" alt="${
            pull.user.login
          }" class="avatar">
        ${pull.user.login}
        ${renderStatus(pull)}
        </button>
        </h2>
        <div id="${
          pull.user.login + pull.id
        }" class="accordion-collapse collapse" aria-labelledby="${
            pull.user.login
          }" data-bs-parent="${pull.user.login}">
          <div class="accordion-body">
          ${converter.makeHtml(pull.body || "Tidak ada deskripsi")}
          <br />
          <div className="d-flex">
          <a href="${
            pull.html_url
          }/files" target="_blank" class="btn btn-sm btn-success">View Solution</a>
          <a href="${
            pull.html_url
          }" target="_blank" class="btn btn-sm btn-primary">Details</a>
          </div>
          </div>
          </div>
          </div>
          </div>
          `
          document.getElementById("pull-request").innerHTML += pullRequest
        })
      }

      document.getElementById("spinner").style.display = "none"
      document.getElementById("content").style.display = "flex"
    })
}

function main() {
  getQuestionDetails()
  getPullData()
}

main()
