Just a few words on this coding assignment and a few assumptions. 

1.) I found that the size of the data set in this example caused considerable issues with the choice of database.  I settled on MySQL and installed it on a GoDaddy shared server that could serve websites.  It took multiple imports of the dataset to get all of the data into the table.  This proved to be the most time consuming part of the exercise.

Once the data was brought in, I created a custom API built in PHP to get the required functionality needed to fulfill this assignment.  The details of this API is outside of the scope of this assignment and is not offered as open source.

2.) Search functionality was built using a full text sort in MySQL on the large table.  It uses a relevance sort and is a significantly faster algorithm for searching through large datasets.  Since the relevance algorithm on full text search was pretty good, I did not add any other sort functionality however it could have been added if needed for UX reasons.  The API would have allowed for it if needed.

3.) The colors and header were made to look like the Simons Foundation website.  No functionality was brought over.

4.) Jquery, CSS, Javascript, and HTML were the only languages used.  Bootstrap was also added for styling.

5.) This POC was only built for desktop screen sizes.

6.) A finished version of this in working condition can be found here:
http://www.ourstreets.us/simonsfoundation/HTML/

