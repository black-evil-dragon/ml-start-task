# * _________________________________________
# * | Dev ...
FROM node:22-alpine as development

# Workdir management
WORKDIR /app
COPY package*.json ./

COPY . .

# Build
RUN npm install


EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# * |________________________________________



# * _________________________________________
# * | Build ...
FROM node:22-alpine as build

WORKDIR /app
COPY package*.json ./

COPY . .

RUN npm i


RUN npm run build


FROM nginx:stable-alpine as production

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

# * |________________________________________