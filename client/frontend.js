const submitBtn = document.querySelector('#submit'),
  passwordsList = document.querySelector('.passwords-list'),
  formEmail = document.querySelector('#email'),
  formPassword = document.querySelector('#password'),
  urlServ = '/api/passwords',
  btnFind = document.querySelector('.find'),
  searchInput = document.querySelector('#search-input'),
  btnRemove = document.querySelector('.remove-by-id'),
  btnShow = document.querySelector('#show'),
  // cardId = document.querySelector('#card-id'),
  cardDeleteBtn = document.querySelectorAll('#card-delete-btn');

const userData = {}
const userDataList = new Array();

//ADD NEW USER DATA
async function formSubmit() {
  if (formEmail.value && formPassword.value) {
    userData.email = formEmail.value;
    userData.password = formPassword.value;
    const newUserData = await request('/cards/post', 'POST', userData);
    const userCardTemplate = `
      <div class="card">
        <h4 class="card-title"><p id="card-text">Email-adress: </p>${newUserData.email}</h4>
        <p class="card-text"><p id="card-text">Password: </p>${newUserData.password}</p>
        <p class="card-text"><p id="card-text">ID: </p><p id="card-id">${newUserData.id}</p></p>
      </div>
    `
    userDataList.push(userCardTemplate);
    passwordsList.insertAdjacentHTML('beforeend', userDataList[userDataList.length - 1]);
  }
  formEmail.value = '';
  formPassword.value = '';
}
submitBtn.addEventListener('click', formSubmit);

// SHOW ALL USERS LIST
btnShow.addEventListener('click', async function() {
  passwordsList.innerHTML = '';
  const allUsersList = await request('/api/cards/show');
  allUsersList.forEach(e => {
    const data = `
    <div class="card">
      <h4 class="card-title"><p id="card-text">Email-adress: </p>${e.email}</h4>
      <p class="card-text"><p id="card-text">Password: </p>${e.password}</p>
      <p class="card-text"><p id="card-text">ID: </p><p id="card-id">${e.id}</p></p>
    </div>
  `;
    passwordsList.insertAdjacentHTML('beforeend', data);
  });
});

// FIND BY ID
btnFind.addEventListener('click', async function() {
  passwordsList.innerHTML = '';
  const id = searchInput.value;
  const userById = await request(`/api/cards/find/${id}`);
  passwordsList.innerHTML = `
    <div class="card">
      <h4 class="card-title"><p id="card-text">Email-adress: </p>${userById.email}</h4>
      <p class="card-text"><p id="card-text">Password: </p>${userById.password}</p>
      <p class="card-text"><p id="card-text">ID: </p><p id="card-id">${userById.id}</p></p>
    </div>
  `;
  searchInput.value = '';
});

//DELETE BY ID
btnRemove.addEventListener('click', async function() {
  const id = searchInput.value;
  const response = await request(`/api/cards/remove/${id}`, 'DELETE');
  console.log(response);
  searchInput.value = '';
});

//Template For Fetch Request
async function request(url, method = 'GET', data = null) {
  const headers = {};
  let body
  if (data) {
    headers['Content-type'] = 'application/json';
    body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, {
      method,
      headers,
      body
    });
    return await response.json();
  } catch(e) {
    console.warn(e.message);
  }
}