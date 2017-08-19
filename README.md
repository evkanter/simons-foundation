Just a few words on this coding assignment and a few assumptions. 

1.) I found that the size of the data set in this example caused considerable issues with the choice of database.  I settled on MySQL and installed it on a GoDaddy shared server that could serve websites.  It took multiple imports of the dataset to get all of the data into the table.  This proved to be the most time consuming part of the exercise.  Once the data was brought in, I created a custom API built in PHP to get the required functionality needed to fulfill this assignment.  

2.) Search functionality was built using a full text sort in MySQL on the large table.  It uses a relevance sort and is a significantly faster algorithm for searching through large datasets.  Since the relevance algorithm on full text search was pretty good, I did not add any other sort or paging functionality however it could have been added if needed for UX reasons.  The API would have allowed for it if needed.

3.) The colors and header were made to look like the Simons Foundation website.  No functionality was brought over.

4.) Jquery, CSS, Javascript, AJAX, and HTML were the only languages used.  Bootstrap was also added for styling.  This would have been a good project for React or Angular considering that quite a bit of HTML was added dynamically to the DOM.  Both frameworks are more robust than AJAX in serving REST API calls.

5.) Due to heavy data density, this POC was built for desktop screen sizes.

6.) A finished functioning version of this coding assignment can be found here:
http://www.ourstreets.us/simonsfoundation/HTML/

