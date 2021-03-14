# KubeTalk
This project is a little toolbox to demonstrate kubernete's orchestration capabilities

## Features

* `GET /api/toolbox/info`: Get current host, to demonstrate load balancing
* `POST /api/toolbox/crash`: Exits the executing proccess, causing node to fail and kubernetes to reset it
* `POST /api/toolbox/usememory`: Increases memory usage by adding data to an array. Can be used to trigger OOM
* `POST /api/toolbox/usecpu`: Executes a loop causing high CPU usage, which triggers HPA

# Load Balancer

To demonstrate the load being balanced by the pods use `curl -H "Connection: close" <Service-IP>/api/toolbox/info`. Connection close is needed since balancing is done at TCP level, and with HTTP Keep-Alive the same pod would be used.