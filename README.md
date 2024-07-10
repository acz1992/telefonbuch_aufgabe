# Telefonbuch_aufgabe

## Brief

Develop a simple graphical user interface for searching a phonebook. It should be possible to search the phonebook by name using a free text field. As the potentially incomplete search term is being entered, the phonebook should be checked for matches without considering case sensitivity, and a list of matches with the full name and phone number should be displayed on the user interface.

Use the attached JSON file as the data source for the phonebook, and develop the frontend preferably using JavaScript, React, and Material UI. Ensure that the user interface is usable on different screen sizes. Whenever possible, choose a client-server architecture where the phonebook data resides server-side and is queried interactively by the client during runtime. At GEOMAGIC, an Apollo Server and GraphQL are typically used for communication.

Please provide your solution as a git repository in the form of a zip folder via email and include any necessary instructions for starting or using the application in a README file.

## Project Initialization

### Prerequisites

Ensure you have Node.js and npm installed on your machine. This project was built using Node.js version 16.x or higher.

### Installation

1. Clone the repository to your local machine using Git:

    ```bash
    git clone git@github.com:acz1992/telefonbuch_aufgabe.git
    ```

2. Change into the backend sub-directory:

    ```bash
    cd telefonbuch_aufgabe/backend
    ```

3. Install the necessary backend dependancies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    node src/server.js
    ```

    The server will run at http://localhost:4000/graphql.

5. Open a new terminal and change into the frontend directory:

    ```bash
    cd frontend
    ```

6. Install the necessary frontend dependancies:

    ```bash
    npm install
    ```

7. Run the development server:
    ```bash
    npm run dev
    ```
    The frontend development server will run at http://localhost:5173/.

## Usage

### Instructions

1. Open your web browser and go to http://localhost:3000.
2. Enter a name in the search field to search for contacts in the phonebook.
3. As you type, the application will display matching contacts dynamically.
4. View the list of contacts with their full names and phone numbers.
5. The application is responsive and can be used on different screen sizes.

### Further Features

1. **Pagination** - used for both backend and Material UI on frontend:
   Enhances performance by fetching and displaying data incrementally, reduces load times, and improves usability by allowing users to navigate through large datasets efficiently.

2. **Debouncing** - using customHook:
   Prevents rapid, repetitive function calls, reduces server load by sending requests only after a specified pause of 250ms, and enhances user experience by smoothing out interactions.

3. **Alphabetical listing** - Resolver updated so that fetched data is always alphabetically ordered:
   Ensures that fetched data is sorted alphabetically based on a specific field (e.g., name), providing consistency in data presentation.

4. **Loading and error messages** - returned object from query used to conditionally generate loader and error messages
   Displays visual feedback to users during asynchronous operations such as data fetching (loading) and when errors occur, improving user awareness and experience.

5. **No contacts message** - using conditional rendering:
   Conditionally displays a message when a search query returns no results, informing users that no matching data was found based on their input.

## Learn More

Check the [repository](https://github.com/acz1992/telefonbuch_aufgabe) for the commit history for a step-by-step look at the development process. Closed issues may contain descriptions of completed tasks.
