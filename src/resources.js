const books = {
  book1: {
    title: 'Developing Steps for learning programming through gamification',
    body: "It’s important to remember that for many new developers, the main goal is to create something tangible. If you're finding yourself caught up in dense theoretical lectures and feeling overwhelmed, it's often best to take a step back. This paper outlines a method for developing an entertaining game, which is a fantastic way to learn. Being able to create something enjoyable and engaging increases the likelihood of sticking with the task compared to working on something dull that lacks enjoyment.",
  },

  book2: {
    title:
      'A Conceptual Model for Learning to Program in Introductory Programming Courses',
    body: 'Starting to learn how to code can be daunting at best. Breaking down how to develop software into more bite-sized and engaging pieces could mean the difference between giving up and continuing on your path. While this doesn’t entirely solve the problem of code being difficult to learn, it’s always useful for beginners to start to develop good habits and to have something to fall back on when times get difficult.',
  },

  book3: {
    title: 'Harvard CS 50',
    body: 'This is an incredible course offered by the Harvard University CS department. CS50 is an amazing introduction to software development taught by an outstanding professor. If someone is brand new to CS and isn’t sure where to go, this is the best free way to see if you might want to explore further into the field.',
  },

  book4: {
    title: 'Eloquent Javascript',
    body: "For many, JavaScript is a fantastic introductory language to learn. Its syntax is straightforward, and its underlying structure is very forgiving for beginners. Additionally, it's a highly interactive and enjoyable way to learn coding. Website creation is highly visual and allows for a great deal of creativity.",
  },

  book5: {
    title: 'How To Center a Div',
    body: 'The budding joke in the web developer field is that centering a div is one of the hardest things you’ll run into on a day-to-day basis. While this isn’t necessarily true, it is true that centering divs is a very important part of developing a website and is initially one of the hardest things to do. This blog post breaks down how to do this in multiple ways and is a great resource for anyone getting into web development.',
  },
};

export function getBooks(name) {
  return books[name];
}
