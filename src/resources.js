const books = {
  book1: {
    title: 'Developing Steps for learning programming through gamification',
    body: "It’s important to remember that for many new developers, the main goal is to create something tangible. If you're finding yourself caught up in dense theoretical lectures and feeling overwhelmed, it's often best to take a step back. This paper outlines a method for developing an entertaining game, which is a fantastic way to learn. Being able to create something enjoyable and engaging increases the likelihood of sticking with the task compared to working on something dull that lacks enjoyment.",
    citation:
      'S. T. Tun, A. Hutasingh and N. Aphiratsakun, "Developing Steps for Learning Programming through Gamification," 2023 20th International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology (ECTI-CON), Nakhon Phanom, Thailand, 2023, pp. 1-4, doi: 10.1109/ECTI-CON58255.2023.10153222.',
    pdf: 'pdf1',
  },

  book2: {
    title:
      'A Conceptual Model for Learning to Program in Introductory Programming Courses',
    body: 'Starting to learn how to code can be daunting at best. Breaking down how to develop software into more bite-sized and engaging pieces could mean the difference between giving up and continuing on your path. While this doesn’t entirely solve the problem of code being difficult to learn, it’s always useful for beginners to start to develop good habits and to have something to fall back on when times get difficult.',
    citation:
      'Ali, Azad. "A conceptual model for learning to program in introductory programming courses." Issues in Informing Science & Information Technology, vol. 6, annual 2009, pp. 517+. Gale Academic OneFile, link.gale.com/apps/doc/A229896146/AONE?u=utah_gvrl&sid=bookmark-AONE&xid=2f37f848. Accessed 23 Feb. 2024.',
    pdf: 'pdf2',
  },

  book3: {
    title: 'Harvard CS 50',
    body: 'This is an incredible course offered by the Harvard University CS department. CS50 is an amazing introduction to software development taught by an outstanding professor. If someone is brand new to CS and isn’t sure where to go, this is the best free way to see if you might want to explore further into the field.',
    citation:
      'Harvard University CS50: Introduction to Computer Science \n https://pll.harvard.edu/course/cs50-introduction-computer-science',
    link: 'https://pll.harvard.edu/course/cs50-introduction-computer-science',
  },

  book4: {
    title: 'Eloquent Javascript',
    body: "For many, JavaScript is a fantastic introductory language to learn. Its syntax is straightforward, and its underlying structure is very forgiving for beginners. Additionally, it's a highly interactive and enjoyable way to learn coding. Website creation is highly visual and allows for a great deal of creativity.",
    citation:
      'Marijn Haverbeke, (2024). Eloquent Javascript (4th ed).\n No Starch Press',
    link: 'https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf',
  },

  book5: {
    title: 'How To Center a Div',
    body: 'The budding joke in the web developer field is that centering a div is one of the hardest things you’ll run into on a day-to-day basis. While this isn’t necessarily true, it is true that centering divs is a very important part of developing a website and is initially one of the hardest things to do. This blog post breaks down how to do this in multiple ways and is a great resource for anyone getting into web development.',
    citation:
      'Josh W Comeau (2024, February 14). How To Center a Div \n https://www.joshwcomeau.com/css/center-a-div/',
    link: 'https://www.joshwcomeau.com/css/center-a-div/',
  },
};

export function getBooks(name) {
  return books[name];
}
