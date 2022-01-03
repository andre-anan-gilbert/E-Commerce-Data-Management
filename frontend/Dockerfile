FROM node:16.13
WORKDIR /usr/src/app/frontend
COPY package*.json ./
RUN yarn
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]