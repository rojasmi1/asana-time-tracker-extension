# Asana Time Tracker Extension
This is a Google Chrome extension for tracking Asana tasks' time.

* Loads a Page Action for all Asana Tabs
* Reads the current task's ID from the URL
* It stores an entry {task_id,duration} into a Mongo DB collection via Rest API
* The created entry will be queried by the [Asana Exporter](https://github.com/rojasmi1/asana-exporter) utility so each task's duration can be exported in the CSV.


# Changelog
* 1.0
Base functional version of the extension that allows for time registration.

* 1.1
Add the possibility to updated entries.

* 1.2
Make Mongolab API key configurable in the extension's options.

* 1.3
Ask the user to configure the extension's options when trying to track tasks without providing the respective API Keys.
