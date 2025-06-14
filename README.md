# Project Title

Wilmette Junior High School Band Program Webpage

---

## Description

This project is the beginning of a web app that lists information about the program and displays a
repertoire lists that users can contribute to.

---

## Installation

1. Clone the repository

git clone https://github.com/MrAMB312/my-app-2.git

2. Navigate into the project directory

cd my-app-2

3. Install dependencies

npm install

4. Start the JSON server (mock backend) on port 3001

npx json-server --watch db.json --port 3001

5. In a new terminal, start the development server

npm start

---

## Usage

* Open your browser and navigate to http://localhost:3000 to view the app.

* Use the "Add New Repertoire" form in the Repertoire List page to submit new pieces to the repertoire list.

* The repertoire list is fetched from the JSON server and displays all entries sorted by title.

* The form data is sent to the JSON server which stores the information in db.json.

* Refreshing the page will continue to display the updated repertoire list.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.

2. Create a new branch for your feature or fix.

git checkout -b feature/your-feature-name

3. Make your changes and commit them with descriptive messages.

git commit -m "adding feature x"

4. Push your branch to your fork.

git push origin feature/your-feature-name

5. Open a pull request against the main repository's main branch.

