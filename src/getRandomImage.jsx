const imageArray = ["Angular", "Boostrap", "Ccsharp", "KompleWeb"];

export function getRandomImage() {
  return imageArray[Math.floor(Math.random() * imageArray.length)];
}
