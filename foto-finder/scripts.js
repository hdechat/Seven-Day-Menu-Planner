const getPhoto = (event) => {
  event.preventDefault()
  const photo = document.querySelector('#upload-photo').files[0].name
  const title = document.querySelector('#title').value
  const caption = document.querySelector('#caption').value
  const photoCard = {
    title,
    caption,
    photo
  }

  addPhoto(photoCard)
}

const addPhoto = (photoCard) => {
  const photo = 
    `<article>
      <h3>${photoCard.title}</h3>
      <img src="photos/${photoCard.photo}" />
      <p>${photoCard.caption}</p>
    </article>
    `
  const li = document.createElement('li');
  const newListElement = document.querySelector('.photo-list').appendChild(li).innerHTML = photo
}

document.querySelector('#submit-button').addEventListener('click', getPhoto)
