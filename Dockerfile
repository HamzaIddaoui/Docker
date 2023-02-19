FROM node:16

RUN mkdir -p Users\Electronic Store\Desktop\Docker\Dockergit
WORKDIR Users\Electronic Store\Desktop\Docker\Dockergit
COPY package.json . 
RUN npm install 
COPY ./ . 
Expose 3030 
CMD ["npm","start"]
