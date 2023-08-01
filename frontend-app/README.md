# R2D2 Cloud Prototype - README

## Description

This repository contains the cloud-based prototype of R2D2, a text generation application with three key use cases: MarketGPT, Personalized Email Outreach, and Social Media Posting. The prototype is built using FastAPI (Python) for the backend and React for the frontend.

## Backend (FastAPI)

### Setup

1. Install Python (version >= 3.7) and pip on your machine.
2. Create a virtual environment and activate it:
3. Install the required Python dependencies:
4. Obtain an OpenAI API key and replace `YOUR_OPENAI_API_KEY` in `backend/app/main.py` with your actual key.

### Usage

1. Start the FastAPI server:
2. The backend is now running at http://localhost:8000. You can use it to generate text for MarketGPT, Personalized Email, and Social Media Posting use cases.

### Deployment

1. For serverless deployment, use AWS Lambda and API Gateway with AWS SAM or the Serverless Framework.
2. Containerization with Docker and deployment on AWS Fargate is also possible.
3. Set environment variables for your OpenAI API key and any other configuration in the deployment process.

### Trade-offs

1. We used FastAPI due to its performance, asynchronous capabilities, and ease of use with Python.
2. For simplicity, we didn't implement user authentication or rate limiting, which should be added for production use.

## Frontend (React)

### Setup

1. Ensure you have Node.js and npm installed (version >= 14).
2. Install dependencies for the React application:

### Usage

1. Start the React development server:
2. The frontend application is now accessible at http://localhost:3000.
3. Use the interface to interact with the backend and see generated results in real-time.

### Deployment

1. For frontend deployment, you can use AWS S3 for hosting a static website or AWS Amplify for easy deployment and hosting.
2. Configure the deployment process to build and deploy the React app to the desired AWS service.

### Trade-offs

1. We used Axios for API calls due to its simplicity and broad community support.
2. For production, use a production-ready web server and optimize asset loading for better performance.


