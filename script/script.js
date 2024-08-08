const input = document.querySelector('.input-date')
const btn = document.querySelector('button')
const wrapper = document.querySelector('.wrapper-result')



function getAge(dateString) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  let d = today.getDay() - birthDate.getDay();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age === 0) {
    m = 12 + m;
    if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
      m--;
    }
  }

  return age ? age + 'г' : m + 'м';
}


let birthDate = new Date(input.value);






btn.addEventListener('click', async () => {
  let birthDate = new Date(input.value);
  const promiseDate = new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, 2000)
  })
  const dateResult = getAge(birthDate)
  wrapper.innerHTML = null
  wrapper.insertAdjacentHTML('beforeend', `<span class="loading"></span>`)
  const loading = document.querySelector('.loading')
  try {
  await promiseDate
    const age = parseInt(dateResult)
    let second = new Date().getSeconds() 
    wrapper.insertAdjacentHTML('beforeend', `
      <h2>Ты живешь</h2>
      <div class="result-item-wrapper">
    <div class="result-item">
      <h3>Мне</h3>
      <span>${age}</span>
      <h3>лет</h3>
    </div>
    <div class="result-item">
      <h3>или</h3>
      <span>${age * 365}</span>
      <h3>дней</h3>
    </div>
    <div class="result-item">
      <h3>или</h3>
      <span>${age * 365 * 24}</span>
      <h3>часов</h3>
    </div>
    <div class="result-item">
      <h3>или</h3>
      <span>${age * 365 * 24 * 60}</span>
      <h3>минут</h3>
    </div>
    <div class="result-item">
      <h3>или</h3>
      <span>${age * 365 * 24 * 60 * second}</span>
      <h3>секунд</h3>
    </div>
  </div>
`)
  }
  finally {
    loading.style.display = 'none'
  }
})
