docker stop $2
docker rm $2

# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)

docker pull $1/$2
docker run --name $2 -d -p $3:$4 $1/$2
