/******************************************
project 1 - Random Quote Generator
******************************************/
const loadqQuoteBtn = document.querySelector('.load-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
/***
 * `quotes` array
 ***/



const quotes = [
      {
          quote : 'Writing is like sex. First you do it for love, then you do it for your friends, and then you do it for money.',
          author: 'Virginia Woolf'
      },
      {
          quote : 'To survive, you must tell stories.',
          author: 'Umberto Eco'
      },
      {
          quote : 'Always be a poet, even in prose.',
          author: 'Charles Baudelaire'
      },
      {
          quote : "If my doctor told me I had only six minutes to live, I wouldn't brood I'd type a little faster.",
          author: 'Isaac Asimov'
      },
      {
          quote : "The purpose of a writer is to keep civilization from destroying itself.",
          author: 'Albert Camus'
      },
      {
          quote : "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.",
          author: 'John Steinbeck'
      },
      {
          quote : "Never let the fear of striking out keep you from playing the game.",
          author: "Babe Ruth"
      },
      {
          quote : "Money and success don’t change people; they merely amplify what is already there.",
          author: "Will Smith"
      },
      {
          quote : "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
          author: "Steve Jobs"
      }
]

/***
 * `getRandomQuote` function
 ***/
 loadqQuoteBtn.addEventListener('click', showRandomQuote)

 function showRandomQuote() {
       const randomQuoteNum = Math.round(Math.random() * quotes.length);
       const randomQuote = quotes[randomQuoteNum];
       
       const text = randomQuote.quote;
       const authorText = randomQuote.author;


       // `printQuote` function
       quote.innerHTML = text;
       author.innerHTML = authorText;
 }



/***
 * click event listener for the print quote button
 ***/


