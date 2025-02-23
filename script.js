function toggleMode() {
  // Seleciona o elemento <html>
  const html = document.documentElement
  // Alterna a classe "light"
  html.classList.toggle("light")

  // Seleciona a imagem do perfil
  const img = document.querySelector("#profile img")
  if (img) {
    // Verifica se a imagem existe
    // Altera o atributo src da imagem com base na presença da classe "light"
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/avatar-light.png")
    } else {
      img.setAttribute("src", "./assets/avatar.png")
    }
  }
}
