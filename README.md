# CarCar

Team:

* Keenan - Sales Microservice
* Shelen - Service Microservice

## Design
The three bounded contexts are Service, Sales, and Inventory. 
For now; inventory has three resources, models, manufacturers, and available automobiles. 
Please see the attached PNG for an in-depth desciription of how our bounded contexts are defined.   

![alt text](img/project-beta-bc.png "project-beta-bc")

## Service microservice

The service microservice has four models. One to define a status, one to be the consumer of the data from the poller called AutomobileVo, a model for the teachnician and finally a model for the services' itself called Appointment. 

Inventory is being polled into my VO so that all vin data can be collected and determine if a client's vehicle was purchased in house. 

I made one change the Inventory Microservice in the URL's file. I added /new for two of the post requests.
React was overriding my list view of these fields on the App.js page so I gave the post methods their own URL. No changes were made to the Views/Models etc. 

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
