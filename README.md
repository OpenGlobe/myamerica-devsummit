myAmerica Developer Summit - 2015
=======

This is the home page of the [myAmerica Developer Summit 2015](http://openglobe.github.io/myamerica-devsummit/)!

A public repo of all of submitted projects can be found at [https://github.com/myAmericaDevSummit2015] (https://github.com/myAmericaDevSummit2015)!

Update: Project Summaries from the myAmerica Developer Summit 2015
------------------------------------------------------------------

Eleven teams presented apps for recreation including trails data pulling in Flicker photos, mashing together permit information for all agencies, two games for kids, and a few others presenting ways to showcase recreation and gather crowd-sourced/harvested information.

Blue Mix - IBM
--------------
Application was created, tested, and deployed using IBM's platform as a service (PaaS) called Bluemix.  Bluemix is based on CloudFoundry but includes a catalog of composable business services which allow us to quickly create, extend, deploy, and monitor web and mobile applications.

We elected to create a node.js application back-end that's built on IBM's Mobile as a Service and a front end web client (separate application) that leveraged leaflet, openstreet maps, and both weather (open weather maps) and text-to-speech services(Watson).  The reason we selected this two-tier architecture is to allow scaling of the application, which does the following:
•	Captures the user's current location (either via their phone or browser).  
•	Uses that location data to perform query on RIDB and the Open Weather Maps API and then returns the recreation assets for a fixed distance and then renders a map (using Leaflet which is a mobile optimized mapping technology and data from OpenStreetMaps).  
•	Provide RIDB data and current data in a pop-up on the map.  
•	Provide a text to speech feature which speaks the current weather.

Topophi
-------
We are a group of avid backpackers making information about our national forests and wildernesses easily available to everyone. We want to educate adventurers and give them the information and permits they need to get into the backcountry.  Visit our website  https://www.topophi.com and read our blog: https://blog.topophi.com/.  

Trail Assist - Stamen Design & Trailhead Labs
------------

Our goal over the weekend of the #dev4outdoors hackathon at the Department of the Interior was to make substantial progress on adding detail and texture inside the 3,000+ parks in the Recreation Information Database (RIDB).

Team Members:
*	[Dan Rademacher](mailto:dan@stamen.com) (Stamen Design)
*	[Seth Fitzsimmons](mailto:seth@stamen.com) (Stamen Design)
*	[Jereme Monteau](mailto:jereme@trailheadlabs.com) (Trailhead Labs

Public Repo: https://github.com/myAmericaDevSummit2015/trail-assist

The code repository for TrailEditor is here:  https://github.com/CodeForPortland/trailheadit

WanderList - Booze-Allen Hamilton
---------------------------------
WanderList is an easy way to create lists of your outdoor adventures. It allows you to search, create, and share your own curated lists that highlight your favorite parks into Bucket Lists.

Public Repo: 

Ascent - Booze-Allen Hamilton
-----------------------------
ASCENT is a mobile-optimized, we- based application which pits two teams of kids from all over the country against each other in a battle to get to the top and stay there. Kids earn points for their teams by visiting parks and earn bonus points by finding hidden QR codes at different locations.

Kids can view their conquests on the map and the maps of their competitors.

Public Repo: 

Trail Buddy - Booze-Allen Hamilton
----------------------------------
Trail Buddy provides an intuitive, accessible and human-centric application to interact, query and discovery the beauty of the great outdoors by using publicly available data sets. Combining natural language search, voice query and a learning mechanism which learns from the collective intelligence of the users interacting with it, Trail Buddy answers questions, just like your best buddy would.

Public Repo:

NatLand Facts! - HipCamp
------------------------
We built a platform that allows Teachers, Rangers, and the general public to upload fun and unique facts about our National Parks and Lands. We're hoping the facts captured here excite kids (and their families) to go visit our parks and monuments!

Public Repo: https://natlandfacts.herokuapp.com/ (We'll be uploading the project to the Repository) 

iBeacon - NIC
-------------
See presentation.

SideStream API and SideStream Reference Application - NIC
---------------------------------------------------------
The Internet contains a wealth of information and social media related to our federal parks and recreation areas. Much of this information is geo-located and is accessible and searchable via an API. The RIDB Side Stream API allows developers to pull supplemental information from a variety of sources using a single API and RIDB’s identifiers for recreation resources. This greatly reduces the effort required by a developer to access these supplemental resources when working with RIDB data.
Anticipated sources of supplemental information provided by the RIDB Side Stream API include: photo sharing websites, Wikipedia, Google Maps, travel website ratings, social media content, and weather information. The application calling the API would specify which sources of information should be included in the results.  During the summit, development of the Flickr and Yelp component of the system was completed.

Consumers of the new API would be websites, web applications, and mobile applications which are already working from RIDB information. The API uses REST protocols and provides payloads in JSON just like RIDB.

To prove the usefulness, we have built a simple mapping mashup app during the developer summit to show how the API could be used. This proof of concept can serve as a reference for other developers looking to use the RIDB Side Stream API.

Public Repo: 

Recreation Tips System: EGov Team
---------------------------------

Exploring our nation’s recreation resources takes quite a bit of logistical planning. Each park or recreation area can present unique challenges for those about to embark on their journey. We have implemented a proof-of-concept Recreation Tips system that is capable of providing tips for each major entity found in RIDB. Tips would assist the visitor in packing for the trip and finding the best recreation when they get there.

Tips would be generated using three methods. The first method is authored tips created by official representatives of the recreation area. The second method will be to use metadata found within RIDB to pull standard tips from a database. For instance, if a park has swimming, it would suggest that you might want to bring a bathing suit. The last method would be community generated tips. Users could submit tips for any recreation area within RIDB. The user community would then up/down vote these tips and the top tips would be included for that recreation area.  During the summit, the authored tips system was created and work on the generated tips system was started.

The system was implemented as an API. A reference web application demonstrating use of the API was also be created during the summit to demonstrate usage of the API. Because it is implemented as an API, it could be integrated into official government websites and applications as well as third-party applications and websites which currently utilize RIDB data.

Reservation Data Dashboard - US DOT Volpe Team
----------------------------------------------

Tech companies and other organizations use "Big Data" approaches to analyze their transactions and better serve their customers. Recreation.gov has years of anonymized reservations that can similarly be used to drive decisions on federal lands, both by potential visitors and staff at the agencies. The Volpe team focused on making this data useful for visitors, and worked with Recreation.gov staff to analyze one quarter of historical data. The team developed a dashboard that shows users how busy a given facility is across time, how soon in advance visitors typically need to reserve, and other experience data such as light pollution and facility distance from main roads. It also created a basic API framework that could help others work with Recreation.gov reservation data. The team brainstormed with other developers and federal staff about the ways reservation data could be analyzed to support decisions by both visitors and federal agency staff.

Public Repo: 

About the myAmerica Developer Summit 2015
-----------------------------------------

The myAmerica Developer Summit is an opportunity to connect government resources (APIs, datasets, materials) with private sector innovators.  The Developer Summit will include three key themes with challenges (including those solicited in an unconference style) under three broad categories: Customer Service for the 21st Century; Efficient and Improved Government; and Promoting Economic Growth.

Promoting our Nation's Public Lands and Waters
----------------------------------------------

What is myAmerica?  myAmerica is an initiative to bring our nations lands and waters closer to the people that they collectively belong to.  There are many benefits of bringing these wild areas within closer reach; among them improving public health through accessible ways to exercise, reduce stress and spend time outdoors; education through better awareness of man’s impact on nature and a better understanding of ecological principles; cost affordable ways to travel and explore with friends and family; and a closer connection to our country’s diverse history.

The myAmerica initiative helps to expand and explore opportunities for citizen engagement and industry partnerships, and supports the Recreation One Stop (Rec1Stop) ongoing efforts to modernize reservations.  We're supporting interactive planning tools, integrated third party data access efforts, data transparency, field operations support, and marketing / customer service initiatives.

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
If you are considering tweeting about the site, please use the hashtag [#dev4outdoors]

Website
===
[myAmerica Developer Summit 2015](http://openglobe.github.io/myamerica-devsummit/)

Credits and Thanks
===
Much of the format and approach for the "unconference" site comes from that established for the very cool [NSF Polar Cyberinfrastructure Hackathon] (https://github.com/NSF-Polar-Cyberinfrastructure/datavis-hackathon) - thx guys!


