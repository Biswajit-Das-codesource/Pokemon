Detailed Description of Your Pokémon Project
1. Project Overview:
This project is a React-based web application that provides an interactive Pokémon search interface. Users can view detailed information about various Pokémon and search for their favorite ones using the PokéAPI as the data source.

2. Key Features:
Dynamic Data Fetching:

Fetches a list of Pokémon and their details from the PokéAPI.
Implements async/await for handling API calls seamlessly.
Utilizes Promise.all for fetching additional data efficiently.
Search Functionality:

Filters Pokémon by name based on user input.
Implements real-time filtering using useState for search queries.
Responsive Design:

A grid-based layout adjusts to various screen sizes.
The application is styled for usability and visual appeal.
3. Core Components:
App Component:

Initializes and manages state (apidata, loading, and input).
Fetches Pokémon data on the first render using useEffect.
Implements the search functionality.
Card Component:

Displays individual Pokémon details.
Designed to handle dynamic data passed through props.
