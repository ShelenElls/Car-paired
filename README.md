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

For the Status' model. Its set up on the Appointment view that anytime an appointment is created, it defaults to a Scheduled status. As far as i'm aware, when we do a merge to main, it does not populate the databse from my personal computer that has the status' made in admin, to the ones in my partners database. 
If you run into an error with the status' for appointments/services. Please do the following:
In the admin page for Status', create three instances of the model in the name field called; name="SCHEDULED", name="COMPLETED", name="CANCELLED". 
Once those are in the Admin, the rest of the Service Microservice should work properly. These MUST, be in the database prior to creating/accessing the Appointment Model otherwise Django will throw an error.     

I made one change the Inventory Microservice in the URL's file. I added /new for two of the post requests.
React was overriding my list view of these fields on the App.js page so I gave the post methods their own URL. No changes were made to the Views/Models etc. 

## Sales microservice

The Sales microservice has four models. One to poll the data from Automobile, one to create a Salesperson, a model for the Customer and finally a model for the Sales Records. The Sales Records model is reliant on the other three models to generate records in the database.

The views include a page to Get data from the list of sales, list of customers, as well as list of salespersons. The Post methods include sales, customers, and salespersons. 

I made a change the Inventory Microservice in the Automobile model to create a boolean field for 'SOLD'. No changes were made to the Views/URL's etc. 
