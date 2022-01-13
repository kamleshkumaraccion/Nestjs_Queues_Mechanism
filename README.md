Used Docker to create Redis image to run this Application which includes below steps:
Step 1:
Download docker into our local system "https://docs.docker.com/desktop/".

Step 2:
Now we need to pull the docker Redis image from the docker hub.
Command To Pull Redis Image:
docker pull redis

Step 3:
The final step to run the docker Redis image container by mapping our local system port. By default, the Redis instance runs with the '6379' default port inside of the docker container. So to access the Redis we need to port mapping on starting off the container.
Command To Start Redis Container:
docker run --name your_containerName -p your_PortNumber:6379 -d redis

Step 4:
After creating a docker container, it will be stored in our local machine so to start again the container any time run the following command:
docker start your_container_name

Step 5:(Optional Step)
Let test our Redis instance.
Command To Use Redis CLI:
docker exec -it your_docker_container_name redis-cli

Step 6:
Command to install all Packages:
npm i

Step 7:
Command to run the application:
npm run start:dev

