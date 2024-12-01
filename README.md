
    <h1>Pokémon Explorer</h1>
    <p>A React-based web application that lets users explore and search for Pokémon using data from the <a href="https://pokeapi.co/" target="_blank">PokéAPI</a>.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Dynamic Data Fetching</strong>: Fetches Pokémon details in real-time using RESTful API calls.</li>
        <li><strong>Search Functionality</strong>: Filters Pokémon by name dynamically as the user types.</li>
        <li><strong>Responsive Design</strong>: Displays Pokémon cards in a flexible grid layout optimized for various devices.</li>
    </ul>

    <h2>Installation</h2>
    <p>Follow the steps below to set up and run the project:</p>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone &lt;repository-url&gt;
cd &lt;repository-directory&gt;</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the development server:
            <pre><code>npm start</code></pre>
        </li>
        <li>Open the app in your browser at:
            <pre><code>http://localhost:3000</code></pre>
        </li>
    </ol>

    <h2>APIs Used</h2>
    <p>This project uses the PokéAPI for fetching Pokémon data.</p>
    <h3>Base URL:</h3>
    <p><code>https://pokeapi.co/api/v2/</code></p>
    <h3>Endpoints:</h3>
    <ul>
        <li><strong>List Pokémon:</strong>
            <pre><code>GET /pokemon/?offset=0&limit=200</code></pre>
            Retrieves a list of Pokémon with basic details.
        </li>
        <li><strong>Pokémon Details:</strong>
            <pre><code>GET /pokemon/{name or id}</code></pre>
            Fetches detailed information about a specific Pokémon, including stats, abilities, and types.
        </li>
    </ul>

    <h2>Project Structure</h2>
    <p>The application is built using modular React components:</p>
    <ul>
        <li><strong>App Component:</strong>
            <ul>
                <li>Manages states for Pokémon data, loading status, and user input.</li>
                <li>Fetches data from the PokéAPI using <code>useEffect</code> on the first render.</li>
                <li>Implements filtering for search functionality.</li>
            </ul>
        </li>
        <li><strong>Card Component:</strong>
            <ul>
                <li>Displays individual Pokémon details.</li>
                <li>Receives data dynamically through props.</li>
            </ul>
        </li>
    </ul>

    <h2>How It Works</h2>
    <ol>
        <li><strong>Data Fetching:</strong>
            <p>The app fetches a list of Pokémon and their detailed attributes using asynchronous API calls.</p>
        </li>
        <li><strong>Search Functionality:</strong>
            <p>Filters Pokémon by name in real-time as the user types into the search bar.</p>
        </li>
        <li><strong>Rendering:</strong>
            <p>Renders Pokémon cards dynamically based on the search results.</p>
        </li>
    </ol>

    <h2>Future Enhancements</h2>
    <ul>
        <li>Add pagination for easier navigation through large datasets.</li>
        <li>Include sorting options for attributes like type, abilities, or stats.</li>
        <li>Enhance the UI with CSS frameworks like Tailwind CSS or Bootstrap.</li>
        <li>Implement caching to improve performance by reducing API calls.</li>
    </ul>

    <h2>License</h2>
    <p>This project is open-source and available for modification and distribution.</p>

    <footer>
        <p>Created with ❤️ by Biswajit Das.</p>
    </footer>

