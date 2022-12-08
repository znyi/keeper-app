FROM node

RUN apt-get update && apt-get install -y \
	curl \
	&& rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN npm ci

COPY ./ ./app

EXPOSE 3000

CMD [ "npm", "start" ]