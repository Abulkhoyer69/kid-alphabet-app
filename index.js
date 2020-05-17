var letters = document.querySelectorAll('.alphabet').length

for (let i = 0; i < letters; i++) {
  document
    .querySelectorAll('.alphabet')
    [i].addEventListener('click', function () {
      var letterInnerhtml = this.innerHTML
      sayName(letterInnerhtml)
    })
}

document.addEventListener('keypress', function (event) {
  sayName(event.key)
})

function sayName(key) {
  switch (key) {
    case 'a':
      let a = new Audio('./sounds/a.mp3')
      a.play()
      break
    case 'b':
      let b = new Audio('./sounds/b.mp3')
      b.play()
      break
    case 'c':
      let c = new Audio('./sounds/c.mp3')
      c.play()
      break
    case 'd':
      let d = new Audio('./sounds/d.mp3')
      d.play()
      break
    case 'e':
      let e = new Audio('./sounds/e.mp3')
      e.play()
      break
    case 'f':
      let f = new Audio('./sounds/f.mp3')
      f.play()
      break
    case 'g':
      let g = new Audio('./sounds/g.mp3')
      g.play()
      break
    case 'h':
      let h = new Audio('./sounds/h.mp3')
      h.play()
      break
    case 'i':
      let i = new Audio('./sounds/i.mp3')
      i.play()
      break
    case 'j':
      let j = new Audio('./sounds/j.mp3')
      j.play()
      break
    case 'k':
      let k = new Audio('./sounds/k.mp3')
      k.play()
      break
    case 'l':
      let l = new Audio('./sounds/l.mp3')
      l.play()
      break
    case 'm':
      let m = new Audio('./sounds/m.mp3')
      m.play()
      break
    case 'n':
      let n = new Audio('./sounds/n.mp3')
      n.play()
      break
    case 'o':
      let o = new Audio('./sounds/o.mp3')
      o.play()
      break
    case 'p':
      let p = new Audio('./sounds/p.mp3')
      p.play()
      break
    case 'q':
      let q = new Audio('./sounds/q.mp3')
      q.play()
      break
    case 'r':
      let r = new Audio('./sounds/r.mp3')
      r.play()
      break
    case 's':
      let s = new Audio('./sounds/s.mp3')
      s.play()
      break
    case 't':
      let t = new Audio('./sounds/t.mp3')
      t.play()
      break
    case 'u':
      let u = new Audio('./sounds/u.mp3')
      u.play()
      break
    case 'v':
      let v = new Audio('./sounds/v.mp3')
      v.play()
      break
    case 'w':
      let w = new Audio('./sounds/w.mp3')
      w.play()
      break
    case 'x':
      let x = new Audio('./sounds/x.mp3')
      x.play()
      break
    case 'y':
      let y = new Audio('./sounds/y.mp3')
      y.play()
      break
    case 'z':
      let z = new Audio('./sounds/z.mp3')
      z.play()
      break
    default:
      console.log(buttonInnerhtml)
  }
}
