myAmerica Developer Summit - 2015
=======

This is the home page of the [myAmerica Developer Summit 2015](http://myamerica.github.io/devsummit2015/)!  This developer summit is sponsored by the [U.S. Department of the Interior](http://www.doi.gov/).

The organization of this tree is as follows:

* static - Static portions of the website (CSS, JS, resources)
* presentations - Presentations from the meeting (keynotes, etc.)
* code - Includes sub-folders of ALv2 licensed code produced by each session.
* report - The report from the workshop.
* index.html - The actual web site.

About the myAmerica Developer Summit 2015
-----------------------------------------

The myAmerica Developer Summit is an opportunity to connect government resources (APIs, datasets, materials) with private sector innovators.  The Developer Summit will include three key themes with challenges (including those solicited in an unconference style) under three broad categories: Customer Service for the 21st Century; Efficient and Improved Government; and Promoting Economic Growth.

Promoting our Nation's Public Lands and Waters
----------------------------------------------

What is myAmerica?  myAmerica is an initiative to bring our nations lands and waters closer to the people that they collectively belong to.  There are many benefits of bringing these wild areas within closer reach; among them improving public health through accessible ways to exercise, reduce stress and spend time outdoors; education through better awareness of man’s impact on nature and a better understanding of ecological principles; cost affordable ways to travel and explore with friends and family; and a closer connection to our country’s diverse history.

The myAmerica initiative helps to expand and explore opportunities for citizen engagement and industry partnerships, and supports the Recreation One Stop (Rec1Stop) ongoing efforts to modernize reservations.  We're supporting interactive planning tools, integrated third party data access efforts, data transparency, field operations support, and marketing / customer service initiatives.

Key Outcomes:

Customer Service for the 21st Century
-------------------------------------
+ Virtualize and customize a range of visitor services. 
+ Organize information with a commitment to user-focused design and in ways that best serve the needs of the public, vs. reflecting the information architecture of existing bureaucracies. 
+ Platforms to encourage development of interactive maps, podcasts, hospitality services, enhanced visitor experiences, push notifications, language translation, trip planning.

Efficient and Improved Government
---------------------------------
+Leverage innovations across several agencies to create an integrated platform for data on all federal lands and waters. This approach will mitigate the need to recreate separate applications and websites for different public lands and waters visitor sites. 
+Empower local agency personnel to keep content fresh and highly relevant to the local visitor experience, but streamline the backend planning, governance, technology, evaluation and methodology.

Promoting Economic Growth
-------------------------
+ Foster innovation by making the platform flexible and extensible to multiple modes (interactive kiosks, websites, mobile, etc.) and by making information freely available in open formats so that the private sector can leverage and expand the use of the information. 
+ Partnerships will expand the impact of federal efforts through collaboration and open data sharing with a broad network of potential partners who can pull information into tools and services where the public is already searching for this type of information. 


Tweeting and Social Media
===
If you are considering tweeting about the site, please use the hashtag [#myAmerica]

If you use [Google Plus](http://plus.google.com), please consider leveraging our
Google Group/Event Group [here](http://myamerica.github.io).

Website
===
[myAmerica Developer Summit 2015](http://myamerica.github.io/devsummit2015/)

Submitting a Pull Request to the Website
========================================
```
#0. Download and install hub.github.com
#1. File JIRA issue for your update at https://github.com/.../issues
#- you will get issue id e.g., #X where X is the issue ID, e.g., if X is 101, then #101
#2. git clone https://github.com/.../datavis-hackathon.git
#3. cd datavis-hackathon
#4. git checkout -b PR-X
#5. edit files
#6. git status (make sure it shows what files you expected to edit)
#7. git add <files>
#8. git commit -m “fix for #X contributed by <your username>”
#9. git fork
#10. git push -u <your git username> PR-X
#11. git pull-request
```

Amazon Instance and Data Buckets
===
We have an Amazon Virtual Machine setup for the Hackathon attendees to access and use for storing and processing data. You should contact @MBoustani, @chrismattmann, @lewismc or @darth-pr for a username and login credentials for the machine if you wish to use it. Once you have feedback, progress with the following instructions:

The machine can be accessed by using the ssh program as follows.
```
ssh nsfpolardata.dyndns.org
```
login: `<username>`

password: `<provided>`

We have a shared account on the machine which we encourage you to use. This can be accessed as follows.
```
ssh ndeploy@localhost
```
We also have s3 data buckets configured and available for each [proposed session](http://nsf-polar-cyberinfrastructure.github.io/datavis-hackathon/#sessions). These can be accessed from the ndeploy account using the s3cmd as follows:
```
[ndeploy@nsfpolardata ~]$ s3cmd ls
2014-11-03 14:27  s3://nsf-issue-1
2014-11-03 14:27  s3://nsf-issue-11
2014-11-03 14:27  s3://nsf-issue-14
2014-11-03 14:27  s3://nsf-issue-15
2014-11-03 14:27  s3://nsf-issue-3
2014-11-03 14:27  s3://nsf-issue-42
2014-11-03 14:27  s3://nsf-issue-43
2014-11-03 14:26  s3://nsf-issue-48
2014-11-03 14:26  s3://nsf-issue-50
2014-11-03 14:26  s3://nsf-issue-66
2014-11-03 14:26  s3://nsf-issue-74
2014-11-03 14:26  s3://nsf-issue-77
2014-11-03 14:26  s3://nsf-issue-78
2014-11-03 14:26  s3://nsf-issue-79
2014-11-03 14:25  s3://nsf-issue-82
2014-11-03 14:25  s3://nsf-issue-85
2014-11-03 14:27  s3://nsf-issue-9
```
You can also use other s3cmd 
```
s3cmd put
...
s3cmd get
```
etc.
