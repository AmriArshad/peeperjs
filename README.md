# Peeper.js - webcam gaze tracking
An open-source gaze tracking prototype for the web with a focus on extendability of the code and a simple architecture. This project was managed with Jira under the Scrum framework.

## Technologies
Peeper.js is written completely in JavaScript for easy integration with websites. We also used the following libraries to aid in face tracking and image processing respectfully.

### [Faceapi.js](https://justadudewhohacks.github.io/face-api.js/docs/index.html)
AI-powered Face Detection & Rotation Tracking, Face Description & Recognition, Age & Gender & Emotion Prediction for Browser and NodeJS using TensorFlow/JS

### [OpenCV](https://opencv.org/)
OpenCV (Open Source Computer Vision Library) is an open source computer vision and machine learning software library. OpenCV was built to provide a common infrastructure for computer vision applications and to accelerate the use of machine perception in commercial products

## Installation and Setup

### Depedencies (included)

- OpenCV 4.5.0
- Face-api 0.22.2
	- Tiny Face Detector
	- 68 Point Face Landmark Detection

Clone the repo and navigate to the "example" folder.

```shell
$ git clone https://github.com/uoa-compsci399-s1-2022/web-gaze-tracker.git
$ cd web-gaze-tracker/example
```

This folder contains the example HTML page, required modules/libraries, a peeper.js build file and a main.js file which calls relevant functions in the correct order. This folder is independent of the other files in the repo and can be moved to your desired location.

## Usage Examples
Open example.html in VS Code with the live server extension or alternatively use [Node.js](https://nodejs.org/en/download/)

Install `http-server` and then open a live server.
```shell
$ npm install http-server -g
$ http-server -p 5000
```
Now navigate to http://127.0.0.1:5000/example.html to access the example page locally.


## Credits
Client: Dr. Gerald Weber

Lecturer and coordinator: Asma Shakil

Teaching Assistant: Anshul Jain

Team members:
- Amri Arshad
- Jacky Chen
- Kevin Ren
- Ricky Katafono
- Theresa Lan
- Vadim Reger

## License
GNU General Public License v3.0