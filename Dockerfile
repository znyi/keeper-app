FROM node

RUN apt-get update && apt-get install -y \
	curl \
	&& rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY ./package.json  ./
RUN npm install

RUN npm ci

COPY ./  ./

EXPOSE 3000

CMD [ "npm", "start" ]
