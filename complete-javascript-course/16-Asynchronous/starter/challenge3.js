'use strict';

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

const loadNPause = async function () {
  try {
    const img1 = await createImage('img/img-1.jpg');
    currentImg = img1;
    console.log('Image 1 loaded!');
    await wait(2);

    currentImg.style.display = 'none';
    const img2 = await createImage('img/img-2.jpg');
    currentImg = img2;
    console.log('Image 2 loaded!');
    await wait(2);

    currentImg.style.display = 'none';
    const img3 = await createImage('img/img-3.jpg');
    currentImg = img3;
    console.log('Image 3 loaded!');
    await wait(2);

    currentImg.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(imgEl => imgEl.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
