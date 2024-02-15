# Pokemon Challange 

## Project Overview

This project is a web application that allows users to choose one of three starter Pokémon: Bulbasaur, Squirtle, or Charmander. The user can view the Pokémon's name, ID, weight, height, and types beneath its sprite. Upon selecting a Pokémon, the user is prompted to confirm their choice. Once confirmed, the other Pokémon are removed from the display, and the selected Pokémon is centered.

## Features

- **Pokémon Selection**: Users can select from three starter Pokémon.
- **Pokémon Details**: Displays the name, ID, weight, height, and types of each Pokémon.
- **Confirmation Dialog**: Users are asked to confirm their choice before finalizing their selection.
- **Responsive Design**: The app is responsive, ensuring a seamless experience across various devices and screen sizes.

## Screenshots

![Screenshot 2024-02-14 234415](https://github.com/Kidus-berhanu/Pokemon-Challenge/blob/master/Screenshot%202024-02-14%20234415.png "Screenshot 1")

![Screenshot 2024-02-14 234436](https://github.com/Kidus-berhanu/Pokemon-Challenge/blob/master/Screenshot%202024-02-14%20234436.png "Screenshot 2")



## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For adding static type definitions to enhance code quality and understandability.
- **CSS**: For styling components. The project uses component-specific CSS for modularity and easier management.

## Setup and Installation

. Clone the repository to your local machine.
   '''git clone https://github.com/Kidus-berhanu/Pokemon-Challenge.git '''

2. Install the dependencies.
   '''npm install'''


## How to Use

1. **Select a Pokémon**: Click on a Pokémon card to view its details.
2. **Confirm Selection**: After selecting a Pokémon, confirm your choice in the prompt.
3. **View Selected Pokémon**: Upon confirmation, the other Pokémon will be removed, and the selected Pokémon will be displayed in the center.

## Project Structure

- `src/`: Source files for the application.
- `components/`: React components used in the app.
- `services/`: Service for fetching Pokémon data from the API.
- `types/`: TypeScript interfaces and types for Pokémon data.
- `public/`: Public assets, including the `index.html` file.

## API Reference

The application uses the [PokéAPI](https://pokeapi.co/) to fetch data about the Pokémon.

## Future Enhancements

- **Adding More Pokémon**: Extend the application to include more Pokémon selections.
- **Advanced Filtering**: Implement filtering options based on Pokémon types, abilities, etc.
- **User Accounts**: Allow users to create accounts and save their favorite Pokémon.

## Contributing

Contributions to the project are welcome! Please refer to the project's issues tab for upcoming features and bug fixes.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.
