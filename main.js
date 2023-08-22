document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.getElementById('avatar')
    const profName = document.getElementById('name')
    const profUsername = document.getElementById('username')
    const respositorios = document.getElementById('repositorios')
    const seguidores = document.getElementById('seguidores')
    const seguindo = document.getElementById('seguindo')
    const link = document.getElementById('link')

fetch('https://api.github.com/users/mateusceci-coder').then((res) => {
    return res.json()
}).then((json) => {
    avatar.src = json.avatar_url
    profName.innerText = json.name
    profUsername.innerText = json.login
    respositorios.innerText = json.public_repos
    seguidores.innerText = json.followers
    seguindo.innerText = json.following
    link.href = json.html_url
    })
})

