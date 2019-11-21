# Image with latest node version
FROM node:latest

# Install dependecies
USER root
RUN apt-get update
RUN apt-get install git -y