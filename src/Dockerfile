#1
FROM node:alpine

WORKDIR /typingwebsite

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


#2
# FROM nginx:alpine

# RUN rm /etc/nginx/conf.d/default.conf

# COPY nginx.conf /etc/nginx/conf.d/

# COPY --from=0 /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# 
