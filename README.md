# KubeTalk
This project is a little toolbox to demonstrate kubernete's orchestration capabilities

## Features

* `GET /api/toolbox/info`: Get current host, to demonstrate load balancing
* `POST /api/toolbox/crash`: Exits the executing proccess, causing node to fail and kubernetes to reset it
* `POST /api/toolbox/usememory`: Increases memory usage by adding data to an array. Can be used to trigger OOM
* `POST /api/toolbox/usecpu`: Executes a loop causing high CPU usage, which triggers HPA