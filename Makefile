NODE=`docker-compose ps | grep npm | cut -d\  -f 1 | head -n 1`
FILE=docker-compose.yml

#########
# ACTIONS #
#########

build:
	docker-compose -f $(FILE) build

up:
	docker-compose -f $(FILE) up -d

start:
	docker-compose -f $(FILE) start

stop:
	docker-compose -f $(FILE) stop

clean: stop
	docker-compose rm -f

restart: clean build up
	@echo "Restarted all containers"

########
# SHELLS #
########

shell-backend:
	docker exec -ti backend bash

shell-frontend:
	docker exec -ti frontend bash

######
# LOGS #
######

log-backend:
	docker-compose logs backend

log-backend-live:
	docker logs --tail 50 --follow --timestamps backend

log-frontend:
	docker-compose logs frontend

log-frontend-live:
	docker logs --tail 50 --follow --timestamps frontend



