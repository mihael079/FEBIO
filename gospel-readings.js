// Array of gospel verses
const gospelVerses = [
    "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
    "I am the way, and the truth, and the life. No one comes to the Father except through me. - John 14:6",
    "But seek first the kingdom of God and his righteousness, and all these things will be added to you. - Matthew 6:33",
    "Come to me, all who labor and are heavy laden, and I will give you rest. - Matthew 11:28",
    "In the beginning was the Word, and the Word was with God, and the Word was God. - John 1:1",
    "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble. - Matthew 6:34",
    "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. - Matthew 7:7",
    "Blessed are the peacemakers, for they shall be called sons of God. - Matthew 5:9",
    "And he said to them, 'Follow me, and I will make you fishers of men.' - Matthew 4:19",
    "You are the light of the world. A city set on a hill cannot be hidden. - Matthew 5:14",
    "For where your treasure is, there your heart will be also. - Matthew 6:21",
    "And behold, I am with you always, to the end of the age. - Matthew 28:20",
    "Judge not, that you be not judged. - Matthew 7:1",
    "Come, you who are blessed by my Father, inherit the kingdom prepared for you from the foundation of the world. - Matthew 25:34",
    "Love your enemies and pray for those who persecute you. - Matthew 5:44"
];

// Function to update gospel verse
function updateGospelVerse() {
    const randomIndex = Math.floor(Math.random() * gospelVerses.length);
    document.getElementById('verse-content').textContent = gospelVerses[randomIndex];
}

// Initial update
updateGospelVerse();

// Update verse every 12 hours (milliseconds)
setInterval(updateGospelVerse, 12 * 60 * 60 * 1000);
