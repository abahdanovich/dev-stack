FROM node:10
WORKDIR /app
COPY package.json ./
RUN npm install
ENV BROWSER=none
ENTRYPOINT ["npm"]
CMD ["start"]
