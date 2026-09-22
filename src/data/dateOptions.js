export const sarcasticComments = [
  'Interesting choice. I support your questionable decisions. 😂',
  'Okayyy, I see where this relationship is going. 👀',
  'Bold choice. I respect it. ❤️',
  'You really thought about that one, huh? 😭',
  "At this point we're planning a wedding instead of a date. 😂",
  'This date is getting suspiciously expensive.',
  "I hope you're planning to pay for at least your own dessert. 😌",
  'Fine. You win this round. ❤️',
  'Okay, main character energy detected.',
  "This is actually becoming a pretty good date.",
  "We're officially overthinking this. And I love it.",
  'Your standards are showing. 😂',
  "That's actually cute. Don't let it get to your head.",
]

const movie = {
  id: 'movie', emoji: '🎬', title: 'Movie Date', short: 'A little cinematic escape', accent: 'coral',
  description: 'Apparently sitting next to each other in the dark counts as quality time. 😂❤️',
  categories: [
    { id: 'theMovie', emoji: '🍿', title: 'The Movie', prompt: 'Okay, what are we watching?', options: [
      { id: 'romance', title: 'Romance', emoji: '❤️', description: "Something romantic because apparently we're trying to make this even more romantic.", micro: 'Okay, someone is feeling romantic today. 👀❤️', subOptions: ['Cute Romantic Movie', 'Emotional Romance', "We Both Know We'll Spend Half The Movie Looking At Each Other 😭"] },
      { id: 'action', title: 'Action', emoji: '🔥', description: 'Explosions, questionable decisions and snacks.', micro: 'Bold choice. I respect the chaos. 🔥', subOptions: ['Superhero', 'Full Action', "You Pretend You're Not Scared During The Loud Scenes 😂"] },
      { id: 'horror', title: 'Horror', emoji: '👻', description: 'You said you are not scared. A fascinating claim.', micro: 'Excellent choice. Your hand-holding privileges have been approved. 👻', subOptions: ['Psychological Horror', 'Paranormal Horror', "You Said You Aren't Scared. We'll See About That. 👀"] },
    ] },
    { id: 'food', emoji: '🍕', title: 'Food', prompt: 'Now the important part: FOOD.', options: [
      { id: 'fastFood', title: 'Fast Food', emoji: '🍔', description: 'Classic. Reliable. Zero personality required. 😂', micro: 'Finally. Priorities.', subOptions: ['Burger + Fries', 'Pizza', 'Chicken Bucket'] },
      { id: 'restaurant', title: 'Restaurant', emoji: '🍽️', description: 'Ah yes, suddenly we are rich. Love that for us. 😭', micro: 'Your wallet just felt that. 😭', subOptions: ['Fancy Dinner', 'Casual Café', 'Rooftop Dinner'] },
      { id: 'streetFood', title: 'Street Food', emoji: '🌮', description: 'Romance level: 100. Hygiene anxiety: potentially 73.', micro: 'Five-star atmosphere. Ten-rupee snack. Perfect economics.', subOptions: ['Shawarma', 'Momos', 'Local Street Food'] },
    ] },
    { id: 'afterMovie', emoji: '🌙', title: 'After Movie', prompt: "Movie's over. Now what? 👀", options: [
      { id: 'drive', title: 'Late Night Drive', emoji: '🚗', description: 'Because apparently going home after a date is illegal.', micro: 'The plot continues. Going home was never an option. 🚗', subOptions: ['Music + Talking', 'Random City Drive', 'Find A Random Food Spot'] },
      { id: 'walk', title: 'Walk + Ice Cream', emoji: '🍦', description: 'Very cinematic. Somebody call the background music department.', micro: 'Very cinematic. Somebody call the background music department.', subOptions: ['Beach Walk', 'Park Walk', 'Random Night Walk'] },
      { id: 'home', title: 'Go Home', emoji: '🏠', description: 'A brave attempt at ending the evening responsibly.', micro: 'Responsible. Suspicious. I am watching you. 😌', subOptions: ['Call Each Other', 'Text Until We Fall Asleep', '“One More Movie” Lie'] },
    ] },
  ],
}

const beach = {
  id: 'beach', emoji: '🌊', title: 'Beach Date', short: 'Salt air and slow hours', accent: 'aqua', description: 'Sun, sea, sand… and approximately 47 photos of the same sunset.',
  categories: [
    { id: 'activity', emoji: '🌊', title: 'Beach Activity', prompt: 'How are we spending our beach time?', options: [
      { id: 'walk', title: 'Walk On The Beach', emoji: '🚶', description: 'Look at us pretending we are in a movie.', micro: 'Look at us pretending we are in a movie.', subOptions: ['Sunset Walk', 'Barefoot Walk', 'Long Talk Walk'] },
      { id: 'photos', title: 'Photos', emoji: '📸', description: 'Prepare yourself. We are taking 200 photos and keeping 4.', micro: 'Battery percentage suddenly became very important.', subOptions: ['Couple Photos', 'Sunset Photos', 'Completely Random Photos'] },
      { id: 'adventure', title: 'Play / Adventure', emoji: '🏄', description: 'A little chaos, a little courage, a lot of sand.', micro: 'Okay athlete, calm down. 😭', subOptions: ['Beach Games', 'Water Activities', 'Explore Somewhere New'] },
    ] },
    { id: 'food', emoji: '🍹', title: 'Food', prompt: 'What are we eating by the water?', options: [
      { id: 'seafood', title: 'Seafood', emoji: '🦐', description: 'A deliciously ocean-themed decision.', micro: 'Fancy ocean snacks. I approve. 🦐', subOptions: ['Fish', 'Prawns', 'Mixed Seafood'] },
      { id: 'cafe', title: 'Café', emoji: '☕', description: 'Because apparently we cannot sit near the ocean without ordering something.', micro: 'A café order was inevitable. I knew it.', subOptions: ['Coffee + Cake', 'Cool Drinks', 'Café Dinner'] },
      { id: 'beachFood', title: 'Beach Food', emoji: '🌮', description: 'Five-star atmosphere. Ten-rupee snack. Perfect economics.', micro: 'Five-star atmosphere. Ten-rupee snack. Perfect economics.', subOptions: ['Corn', 'Chaat', 'Street Snacks'] },
    ] },
    { id: 'evening', emoji: '🌅', title: 'Evening Plan', prompt: 'How are we ending this beach day?', options: [
      { id: 'sunset', title: 'Sunset', emoji: '🌅', description: 'The obvious main-character ending.', micro: 'Main character energy detected. 🌅', subOptions: ['Watch Sunset Together', 'Sunset Photos', 'Sunset + Music'] },
      { id: 'nightBeach', title: 'Night Beach', emoji: '🌙', description: 'Deep conversations and suspicious astronomy.', micro: 'Deep conversations incoming. Pretend you understand astronomy.', subOptions: ['Sit And Talk', 'Music', 'Stargazing'] },
      { id: 'drive', title: 'Drive', emoji: '🚗', description: 'No destination. No plan. Maximum confidence.', micro: 'No destination. No plan. Maximum confidence.', subOptions: ['Coastal Drive', 'Music Drive', 'Random Destination'] },
    ] },
  ],
}

const trip = {
  id: 'trip', emoji: '🚗', title: 'Long Trip', short: 'A tiny adventure for two', accent: 'gold', description: "So we're planning an entire episode of our lives. 😂",
  categories: [
    { id: 'destination', emoji: '🗺️', title: 'Destination', prompt: 'Where are we escaping to?', options: [
      { id: 'hills', title: 'Hill Station', emoji: '⛰️', description: 'Cold weather, hot tea, and one person stealing the blanket.', micro: 'Cold weather. Hot tea. Blanket theft is now scheduled. ⛰️', subOptions: ['Ooty', 'Kodaikanal', 'Yercaud'] },
      { id: 'coast', title: 'Beach / Coastal Escape', emoji: '🌊', description: 'Apparently we saw one beach and decided we needed another one.', micro: 'One beach was clearly not enough. 🌊', subOptions: ['Pondicherry', 'Mahabalipuram', 'Coastal Road Trip'] },
      { id: 'city', title: 'City Escape', emoji: '🌆', description: 'New city, same two idiots. Perfect.', micro: 'New city, same two idiots. Perfect. 🌆', subOptions: ['Chennai', 'Bengaluru', 'Another City'] },
    ] },
    { id: 'travel', emoji: '🚗', title: 'Travel Style', prompt: 'How are we getting there?', options: [
      { id: 'bike', title: 'Bike Ride', emoji: '🏍️', description: 'Romantic until someone asks how much farther.', micro: "Romantic until someone says 'How much farther?' 😂", subOptions: ['Sunrise Ride', 'Scenic Route', 'Long Highway Ride'] },
      { id: 'car', title: 'Car', emoji: '🚗', description: 'Driver chooses the music. Passenger complains. Tradition begins.', micro: 'Driver chooses the music. Passenger complains. Tradition begins.', subOptions: ['Music + Singing', 'Movie-style Road Trip', 'Random Stops'] },
      { id: 'train', title: 'Train', emoji: '🚆', description: 'Nothing says romance like fighting over the window seat.', micro: 'Window seat negotiations begin. ❤️', subOptions: ['Window Seat', 'Night Journey', 'Explore Stations'] },
    ] },
    { id: 'experience', emoji: '❤️', title: 'Trip Experience', prompt: 'What kind of memories are we making?', options: [
      { id: 'adventure', title: 'Adventure', emoji: '🔥', description: "You wanted adventure. Don't blame me when your legs hurt tomorrow. 😂", micro: 'Please remember I said this was your idea.', subOptions: ['Trekking', 'Water Activities', 'Explore Hidden Places'] },
      { id: 'relaxation', title: 'Relaxation', emoji: '🧘', description: 'Doing absolutely nothing is considered productive.', micro: 'Excellent. My favorite activity: doing nothing.', subOptions: ['Resort', 'Spa', 'Slow Weekend'] },
      { id: 'romantic', title: 'Romantic', emoji: '❤️', description: 'Okay Romeo/Romeo, calm down. 😭❤️', micro: 'Okay Romeo/Romeo, calm down. 😭❤️', subOptions: ['Couple Photos', 'Candlelight Dinner', 'Sunset Together'] },
    ] },
  ],
}

export const dateOptions = [movie, beach, trip]
