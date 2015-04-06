# card-creator
Super simple card creator for Maximum Alpha.

## Usage
Setup any HTTP server to serve index.html to any port. I recommend using [Python's Simple HTTP Server](https://docs.python.org/2/library/simplehttpserver.html). Just `cd` to within this folder from your terminal, run `python -m SimpleHTTPServer 8000`, and navigate to http://localhost:8000/.

Use the form to enter in the info for your card and add the card(s) to your deck. You can view your deck if you scroll down the page. You can also edit any card in the deck by simply clicking on the text you want to edit.

Once you're done, click on "Print Deck" and you'll be taken to a print view. Just right-click -> print and the print tool should open up. A 60 card deck will take exactly 5 pages to print. Make sure you uncheck the double-sided option before you print.

## Issues
Refreshing the page will lose your work. Refreshing the page while on the print view will result in a 404 error. I'll fix up the routing and persistence issues when I decide to polish this thing up.


