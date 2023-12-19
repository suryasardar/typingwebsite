#1
FROM node:alpine as website

WORKDIR /typingwebsite

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


#2
# Use the Nginx image for serving the application
FROM nginx:alpine

WORKDIR  /usr/share/nginx/html
# Copy the built files from the previous stage into the Nginx image
run rm -rf ./*
COPY --from=website /typingwebsite/build .

# Copy the Nginx configuration file
# COPY nginx.conf /etc/nginx/conf.d/default.conf
Entrypoint ["nginx","-g","daemon off;"]
# Expose the port
# EXPOSE 80