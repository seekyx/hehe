const reasons = [
    "I like you because of your sense of humour, whenever I make brainrot jokes or sometimes even offensive ones, you always understand them and laugh along with me.",
    "I like you because of your cheeks, I know you're insecure about it but honestly that's one of the things that I most like about you. It looks so fluffy and cute.",
    "I like you because of your height, this is self explanatory.",
    "I like you because of your mental strength. You've been through so much but you still get up on your feet and move on. I really admire you for that.",
    "I like you because of your kindness. No matter who it is and the reason, you still find a way to be kind and that really moved me.",
    "I like you because of your hair. You have a similar dye to mine and I feel like we have such good taste in dye colours.",
    "I like you because of your taste in food. I still can't believe I found someone that has such similar taste in food as me, the only other person that have similar food taste other than us is my mom.",
    "I like you because of your nose. It looks so boop-able.",
    "I like you because of your cat eyes. I would do anything to stare into them and get lost in them.",
    "I like you because you trust me. I trust you too and I'm really happy that even with trust issues, you trust me.",
    "I like you because of the time we spent together. Whether it was us playing Minecraft when we first met or just talking about ourselves, I love the time we've spent.",
    "I like you because you reassure me quite a lot. I love reassurance and that you taking your time to reassure me just makes me feel treasured.",
    "I like you because you are similar to me. I also apologize a lot, i also have low self esteem (both of us should fix that) and I just feel really relatable to you.",
    "I like you because you wear glasses. I like glasses.",
    "I don't like you. Why? I love you, Yumi. Growing up in such a loving family I know what love is and I don't use it loosely. But believe me, I do really love you Yumi."
  ];
  
  function generateRandomReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById("random-reason").textContent = reasons[randomIndex];
  }
  
  // Generate a random reason when the page loads
  window.onload = generateRandomReason;