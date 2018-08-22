# WARNING
This repo is temporary available for recruiting purposes. The original repo is still in development and it's private.

# cinema-tracker
SPA application

## Technology stack

| Technology   | Version |
| :----------- | :-----: |
| PHP          | >=5.5.9 |
| Node         |  10.5.0 |
| React        |  16.4.1 |

## Local setup

### Install dependencies
`composer install`

`npm install`

### Run local server
`npm start`

Local server will run at `localhost:5000`
PHP local server for api will run at `localhost:8000`

## Production setup

### Install dependencies
`composer install`

`npm install`

### Build the project
`npm run prod`

## Style guide
- Indentation: 2 spaces
- SCSS uses BEM

## Database models

### Cinema
| Name     | Type     | Description |
| :------: | :------: |   :------:  |
| id       | Number   |             |
| name     | String   |             |
| location | String   | Coordinates |

### Showing
| Name      | Type        | Description  |
| :------:  | :------:    | :------:     |
| id        | Number      |              |
| cinema_id | Number (FK) |              |
| movie_id  | Number (FK) |              |
| time      | String      | Showing time |
| url       | String      | Buy ticket link |
| data      | String      | Serialized JSON |

### Movie
| Name     | Type     | Description |
| :------: | :------: | :------:    |
| id       | Number   |             |
| title    | String   |             |
| genre    | String   | Eg. komedia, horror |
| description | String |            |
| photo    | String   | Link from bot |

### User
| Name     | Type     | Description |
| :------: | :------: | :------:    |
| id       | Number   |             |
| email    | String   |             |
| password | String   |             |

### Favourite
| Name     | Type     | Description |
| :------: | :------: | :------:    |
| id       | Number   |             |
| movie_id | Number (FK) |          |
| user_id  | Number (FK) |          |
