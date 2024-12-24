const colors = [
  "#FF5733", "#33FF57", "#5733FF", "#FF33A1", "#33FFF5", // Bright tones
  "#FFF833", "#F533FF", "#33D1FF", "#FF8C33", "#8C33FF", // Neon vibes
  "#33FF8C", "#FF3333", "#33FF33", "#3333FF", "#FF66CC", // Bold and dynamic
  "#66FF33", "#33CCFF", "#FF9966", "#9933FF", "#FFFF33", // Soft and striking
  "#FF7F50", "#40E0D0", "#9370DB", "#FFD700", "#FF4500", // Sunset palette
  "#ADFF2F", "#1E90FF", "#FF1493", "#00FA9A", "#FF6347", // Pastel highlights
  "#EE82EE", "#7FFF00", "#BA55D3", "#FF69B4", "#FFA500", // Candy hues
  "#00CED1", "#FFB6C1", "#FFA07A", "#98FB98", "#DB7093", // Soft complements
  "#20B2AA", "#FFDEAD", "#FF00FF", "#4682B4", "#FFDAB9", // Classic additions
  "#8B008B", "#D2691E", "#800080", "#DA70D6", "#FA8072"  // Deeper shades
];

const christmasElements = [
  "🎄", // Christmas Tree
  "🎅", // Santa Claus
  "❄️", // Snowflake
  "⭐",  // Star
  "🎁", // Gift Box
  "🦌", // Reindeer
  "🔔", // Bell
  "☃️", // Snowman
  "🍪", // Cookie
  "🥛", // Glass of Milk
  "🕯️", // Candle
  "🌟", // Sparkling Star
  "🎶", // Music Notes
  "🎀", // Ribbon
  "🍭", // Candy Cane
  "🍷", // Wine Glass
  "🎊", // Confetti Ball
  "🍎", // Red Apple
  "🧦", // Christmas Stocking
  "🌲",  // Evergreen Tree
  "💫",  // Shooting Star
  "❇️", // Sparkle
  "🪵", // Log (for cozy fires)
  "🎚️", // Slider (to represent lights control)
  "🎌", // Crossed Flags (festive decor)
  "🍫", // Chocolate
  "🎡", // Ferris Wheel (holiday markets)
  "🏔️", // Snowy Mountain
  "🌌",  // Night Sky
  "🦙",  // Llama (festive sweaters!)
  "🎓",  // Cap (for holiday graduations)
  "🎯",  // Bullseye (game time)
  "🎵",  // Music Note
  "🍿",  // Popcorn
  "🛷",  // Sled
  "❣️", // Decorative Heart
  "🔆",  // Decorative Sunburst
  "💡",  // Light Bulb (fairy lights)
  "🎢",  // Roller Coaster (holiday fun)
  "🍰",  // Cake (festive desserts)
  "🍬",  // Hard Candy
  "🥂",  // Champagne Toast
  "🛍️", // Shopping Bag
  "🎑",  // Moon Viewing
  "🏮",  // Lantern
  "🍄",  // Mushroom (decorative)
  "🪅",  // Piñata (festive fun)
  "🌺",  // Flower (poinsettia vibes)
  "📯",  // Postal Horn
  "🎒"   // Bag (Santa’s sack)
];

document.body.addEventListener('click', (e) => {
  const circle = document.createElement('div');
  circle.className = 'circle';

  index = Math.floor(Math.random() * 50);

  const circleContent = christmasElements[index];
  circle.innerHTML = `${circleContent}`;

  document.body.append(circle);

  const x = e.clientX;
  const y = e.clientY;

  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;

  circle.style.backgroundColor = colors[index];

  setTimeout(() => circle.remove(), 5000);
});
