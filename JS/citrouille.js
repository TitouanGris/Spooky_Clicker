const div = document.getElementById("canvas")
let global = 0
const citrouille = document.getElementById("boutonClic")
citrouille.addEventListener("click", () => {
  generateStars()
})
function generateStars() {
for(let i = 0; i < 10; i++) {
    const top = 50 + genVector()
    const left = 50 + genVector()
    const star = document.createElement("div")
    star.style.width = genSize()+"px"
    star.style.aspectRatio = "1/1"
    star.style.borderRadius = "50%"
    star.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
    star.style.position = "absolute"
    star.style.top = top+"%"
    star.style.left = left+"%"
    star.classList.add(`star${global}`)
    div.append(star)
  }
  let myStars = global
  global++
  const interval = setInterval(() => {
    const stars = document.querySelectorAll(`.star${myStars}`)
    stars.forEach((star) => {
      let top = star.style.top.split("%")[0]
      let left = star.style.left.split("%")[0]
      let resultTop = 50 - parseFloat(top)
      let resultLeft = 50 - parseFloat(left)
      if(resultTop > 0) {
        let finalTop = parseFloat(top) - parseFloat(resultTop) * 0.01
        star.style.top = finalTop+"%"
      } else {
        let finalTop = parseFloat(top) - parseFloat(resultTop) * 0.01
        star.style.top = finalTop+"%"
      }
      if(resultLeft > 0){
        let finalLeft = parseFloat(left) - parseFloat(resultLeft) * 0.01
        star.style.left = finalLeft+"%"
      } else {
        let finalLeft = parseFloat(left) - parseFloat(resultLeft) * 0.01
        star.style.left = finalLeft+"%"
      }
    })
  }, 1)
  setTimeout(() => {
    const stars = document.querySelectorAll(`.star${myStars}`)
    clearInterval(interval)
    stars.forEach((star) => {
      star.remove()
    })
  }, 5000)
}
function genSize(){
  return Math.random()*20
}
function genVector() {
  const random = Math.random()
  if(random < 0.5) {
    return Math.abs(Math.random())
  } else {
   return -Math.random()
  }
}