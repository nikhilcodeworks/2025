<!-- Auto-updated README -->
_Last updated: 2026-03-06_

# Note-Taking App
## Demo
(https://notes-wvap.onrender.com/)



![image](https://github.com/user-attachments/assets/7ad31eca-6b7a-47c3-aabb-c30d935d100e)


A simple and intuitive note-taking application that allows users to create, read, edit, and delete notes. Built with Node.js and Express, this app provides a clean and organized interface for managing personal notes.

## Features

- **Create New Notes**: Easily add new notes with a title and content.
- **View Notes**: Read notes in a clean, readable format.
- **Edit Notes**: Update existing notes as needed.
- **Delete Notes**: Remove notes that are no longer needed.
- **Responsive Design**: Access the app seamlessly on various devices.

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: EJS (Embedded JavaScript Templates)
- **File Management**: Using the `fs` module for file operations

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

### Steps to Set Up

1. **Clone the Repository**

   ```bash
   git clone (https://github.com/nikhilcodeworks/Notes.git)
   cd notes-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create Notes Directory**

   Ensure you have a `notes` directory where notes will be stored.

   ```bash
   mkdir notes
   ```

4. **Run the Application**

   ```bash
   npm start
   ```

   The application will start on [http://localhost:3000](http://localhost:3000).

## Usage

- **Home Page**: Lists all available notes.
- **Read Note**: Click on a note to view its content.
- **Edit Note**: Edit existing notes from the read view.
- **Create Note**: Use the form to create a new note.
- **Delete Note**: Remove notes you no longer need.

## API Endpoints

- `GET /` - Display a list of all notes
- `GET /read/:file` - View a specific note
- `GET /edit/:file` - Edit a specific note
- `GET /create` - Show the create note form
- `POST /created` - Create a new note
- `GET /deleted/:file` - Delete a specific note

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

### How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Create a new Pull Request

---

Thank you for checking out my Note-Taking App! 🌟

