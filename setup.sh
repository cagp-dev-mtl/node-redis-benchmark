# Install redis server
sudo apt-get install redis-server

# Start redis
sudo service redis-server start

# Insert data in redis
cat product_data_redis.txt | redis-cli --pipe

# Install redis library for nodejs
npm install ioredis

# Install express
npm install express
