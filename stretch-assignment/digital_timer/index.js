// tens
const secondTens = document.getElementById("secondTens")

// ones
const secondOnes = document.getElementById("secondOnes")

// colon
const colon = document.getElementById("colon")

// ms hundreds
const msHundreds = document.getElementById("msHundreds")

// ms tens
const msTens = document.getElementById("msTens")

// numbers
let st = 0
let so = 9
let msh = 9
let mst = 9

let interval = setInterval(() => {
  if (mst <= 0) {
    if (st === 0 && so === 0 && msh === 0) {
      mst = 0
    } else {
      mst = 9

      if (msh <= 0) {
        msh = 9
        if (so <= 0) {
          so = 9
          if (st <= 0) {
            st = 5
          } else {
            st--
          }
        } else {
          so--
        }
      } else {
        msh--
      }
    }
  } else {
    mst--
  }

  secondTens.textContent = st
  secondOnes.textContent = so
  msHundreds.textContent = msh
  msTens.textContent = mst

  if (st === 0 && so === 0 && msh === 0 && mst === 0) {
    clearInterval(interval)
  }
  console.log("still running")
}, 10)
