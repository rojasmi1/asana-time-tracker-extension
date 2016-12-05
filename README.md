# Asana Time Tracker Extension
This is a Google Chrome extension for tracking Asana tasks' time.

* Loads a Page Action for all Asana Tabs
* Reads the current task's ID from the URL
* It stores an entry {task_id,duration} into a Mongo DB collection via Rest API
* The created entry will be queried by the [Asana Exporter](https://github.com/rojasmi1/asana-exporter) utility so each task's duration can be exported in the CSV.
