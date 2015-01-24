myAmerica Developer Summit - 2015
=======

This is the home page of the [myAmerica Developer Summit 2015](http://myamerica.github.io/devsummit2015/)!  This developer summit is sponsored by the [U.S. Department of the Interior](http://www.doi.gov/).

The organization of this tree is as follows:

* static - Static portions of the website (CSS, JS, resources)
* presentations - Presentations from the meeting (keynotes, etc.)
* code - Includes sub-folders of ALv2 licensed code produced by each session.
* report - The report from the workshop.
* index.html - The actual web site.

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
#1. File JIRA issue for your update at https://github.com/NSF-Polar-Cyberinfrastructure/datavis-hackathon/issues
#- you will get issue id e.g., #X where X is the issue ID, e.g., if X is 101, then #101
#2. git clone https://github.com/NSF-Polar-Cyberinfrastructure/datavis-hackathon.git
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
