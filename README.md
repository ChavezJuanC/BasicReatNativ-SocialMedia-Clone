Basic React Native Social Media Clone

Welcome to the Basic React Native Social Media Clone! This project is a fun, learning-based application that showcases the use of various React Native components and the integration with the JSON Placeholder API for creating posts. Although it's not intended for serious use, it's a great demonstration of essential React Native skills and techniques.
Introduction

This project was created as a part of learning the basics of React Native. It allows users to create posts using the JSON Placeholder API. While this app is more of a meme project and not intended for serious use, it includes a variety of core React Native components and custom components, and demonstrates basic HTTP GET and POST requests.

Check out the repository here.
Features

    Create Posts: Users can create posts using the JSON Placeholder API.
    React Native Components: Demonstrates the use of various core components.
    Custom Components: Includes some custom-built components.
    HTTP Requests: Utilizes basic GET and POST requests for data interaction.
    Basic UI/UX: Provides a simple user interface to interact with the app.

Installation

To run this project locally, follow these steps:

    Clone the Repository:

    bash

git clone https://github.com/ChavezJuanC/BasicReatNativ-SocialMedia-Clone.git
cd BasicReatNativ-SocialMedia-Clone

Install Dependencies:

bash

npm install

Start the Development Server:

bash

npm start

Run on an Emulator or Device:

bash

    npx react-native run-android # for Android
    npx react-native run-ios     # for iOS

Usage

Once the application is running, you can create posts by interacting with the provided interface. The app will make a POST request to the JSON Placeholder API to simulate creating a new post.
Creating a Post

    Open the app on your device or emulator.
    Enter post content.
    Click the "Create Post" button to send the data to the API.
    The app will display the response, showing the newly created post.

Technologies

    React Native: Core framework for building mobile applications.
    JSON Placeholder API: Used for creating and retrieving post data.
    JavaScript: Primary language used in the project.

Screenshots


Future Improvements

    Better UI/UX: Improve the user interface and experience.
    Additional Features: Add more functionalities like user authentication, post editing, and post deletion.
    Error Handling: Implement more robust error handling and validation.
    Performance Enhancements: Optimize the application for better performance.

Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

    Fork the repository.
    Create your feature branch (git checkout -b feature/AmazingFeature).
    Commit your changes (git commit -m 'Add some AmazingFeature').
    Push to the branch (git push origin feature/AmazingFeature).
    Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more details.
Acknowledgements

    Thanks to the creators of React Native for providing such a powerful tool for mobile development.
    Shoutout to the JSON Placeholder team for offering a great tool for testing and prototyping.


----known issues------

"errors" : The "Multiple Posts with same id" error comes from the JSON placeholder API, assigning key 101 everytime. In a real api, make sure not to have the same id assigned to more than 1 list item.