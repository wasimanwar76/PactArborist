const hero = document.getElementById("heroBg");

const treeImages = [
  "https://images.unsplash.com/photo-1526401485004-2aa7ae5b6d02?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1581888227599-779811ec15b2?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=60"
];

hero.style.backgroundImage = `url("${treeImages[Math.floor(Math.random() * treeImages.length)]}")`;
