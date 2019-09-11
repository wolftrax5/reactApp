# https://medium.com/greedygame-engineering/so-you-want-to-dockerize-your-react-app-64fbbb74c217dock
FROM nginx:alpine
COPY /dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]