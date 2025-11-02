FROM node:22-alpine as development

# Workdir management
WORKDIR /app
COPY package*.json ./

COPY . .

# Build
RUN npm install


EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


FROM node:22-alpine as build

WORKDIR /app
COPY package*.json ./

COPY . .

RUN npm ci


RUN npm run build


FROM nginx:stable-alpine as production

COPY --from=build /app/dist /usr/share/nginx/html
# COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]