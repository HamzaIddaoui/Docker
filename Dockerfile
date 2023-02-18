FROM node:16

RUN mkdir -p Users\Electronic Store\Desktop\nodeDockerApp
WORKDIR Users\Electronic Store\Desktop\nodeDockerApp
COPY package.json . 
RUN npm install 
COPY ./ . 
Expose 3030 
CMD ["npm","start"]
