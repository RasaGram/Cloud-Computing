FROM node:lts

WORKDIR /app

COPY . .

RUN npm i

ENV MODEL_URL=https://storage.googleapis.com/bucket-model-rasagram/Machine-Learning-main/best_model.json

CMD ["npm", "run", "start"]