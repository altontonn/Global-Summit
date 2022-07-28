const btnToggle = document.getElementById('button-toggle');
const navContent = document.getElementById('navbarContent');
btnToggle.addEventListener('click', () => {
  navContent.classList.toggle('active');
});

const btnMore = document.querySelector('.btn-more');
const text = document.querySelector('#text');
const continueText = document.querySelector('#continue');

btnMore.addEventListener('click', () => {
  if (continueText.style.display === 'none') {
    continueText.style.display = 'inline';
    btnMore.innerHTML = 'More <i class=\'ms-2 icon-arrow fa fa-angle-down\'>';
    text.style.display = 'none';
  } else {
    continueText.style.display = 'none';
    btnMore.innerHTML = 'Read less <i class=\'ms-2 icon-arrow fa fa-angle-up\'>';
    btnMore.style.background = 'white';
    btnMore.style.color = '#6c757d';
    text.style.display = 'block';
  }
});

const speaker = [
  {
    id: 1,
    img: ['checkerboard.jpg', '1.jpg'],
    name: 'Phil Whitehouse',
    interest: 'Innovation Lead DigitasLBi',
    description: 'Web Directions is the must-attend event of the year for anyone serious about web development.',
  },
  {
    id: 2,
    img: ['checkerboard.jpg', '2.jpg'],
    name: 'Ethan Marcotte',
    interest: 'inventor responsive Web design',
    description: 'I’ve been admiring the Web Directions events for years, and was honored to be part… What a fantastic event!',
  },
];

document.querySelector('.feature-list').innerHTML = speaker.map((speakers) => (
  `<div class="speaker-list list-${speakers.id}">
  <div class="speaker">
    <img src="img/${speakers.img[0]}" class="speaker-img-1 img-fluid" alt="checkboard">
    <img src="img/${speakers.img[1]}" class="speaker-img-2 img-fluid" alt="image-1">
  </div>
  <div class="speaker-info container-fluid">
    <h1 class="fs-3">${speakers.name}</h1>
    <h2 class="fs-5 fw-light  header-h2">${speakers.interest}</h2>
    <div class="bar1"></div>
    <p class="feature-paragraph">${speakers.description}</p>
  </div>
</div>`
)).join('');

const speaker1 = [
  {
    id: 1,
    img: ['checkerboard.jpg', '3.jpg'],
    name: 'Dave Greine',
    interest: 'founder Campaign Monitor',
    description: 'Out of any conference, Web Directions is far and away our favourite',
  },
  {
    id: 2,
    img: ['checkerboard.jpg', '4.jpg'],
    name: 'Hinesh Patel',
    interest: 'Ruby and React Developer',
    description: 'Meeting tech folks like myself and learning from each other is pretty amazing!',
  },
];

document.querySelector('.text-speaker-1').innerHTML = speaker1.map((speak) => (
  `<div class="speaker-list-2 list-${speak.id}">
  <div class="speaker">
    <img src="img/${speak.img[0]}" class="speaker-img-1 img-fluid" alt="checkboard">
    <img src="img/${speak.img[1]}" class="speaker-img-2 img-fluid" alt="image-1">
  </div>
  <div class="speaker-info container-fluid">
    <h1 class="fs-3">${speak.name}</h1>
    <h2 class="fs-5 fw-light  header-h2">${speak.interest}</h2>
    <div class="bar1"></div>
    <p class="feature-paragraph">${speak.description}</p>
  </div>
</div>`
)).join('');

const speaker2 = [
  {
    id: 1,
    img: ['checkerboard.jpg', '5.jpg'],
    name: 'Phil Whitehouse',
    interest: 'General Manager, DT Sydney',
    description: 'Web Directions South is the must-attend event of the year for anyone serious about web development',
  },
  {
    id: 2,
    img: ['checkerboard.jpg', '6.jpg'],
    name: 'Chris Stephens',
    interest: 'Technology Director, Mozo',
    description: '[Web Directions] is a delicious mix of things educational, social and mind-blowing',
  },
];

document.querySelector('.text-speaker-2').innerHTML = speaker2.map((speak2) => (
  `<div class="speaker-list-2 list-${speak2.id}">
  <div class="speaker">
    <img src="img/${speak2.img[0]}" class="speaker-img-1 img-fluid" alt="checkboard">
    <img src="img/${speak2.img[1]}" class="speaker-img-2 img-fluid" alt="image-1">
  </div>
  <div class="speaker-info container-fluid">
    <h1 class="fs-3">${speak2.name}</h1>
    <h2 class="fs-5 fw-light  header-h2">${speak2.interest}</h2>
    <div class="bar1"></div>
    <p class="feature-paragraph">${speak2.description}</p>
  </div>
</div>`
)).join('');