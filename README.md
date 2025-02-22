# Node.js Express TypeScript Boilerplate

This is a boilerplate project for building a Node.js application using Express and TypeScript. It includes a Docker setup for containerization.

## Features

- Express.js for building the server
- TypeScript for type safety
- Docker for containerization
- Winston for logging
- Environment variable management with dotenv
- Swagger for API documentation
- Helmet for security
- CORS support

## Getting Started

### Prerequisites

- Node.js (>= 14)
- Docker (optional, for containerization)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Fakepng/node-express-typescript-boilerplate.git
   cd node-express-typescript-boilerplate
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### Running the Application

#### Development

To run the application in development mode with hot-reloading:

```bash
pnpm run dev
```

#### Production

To build and run the application in production mode:

```bash
pnpm run build
pnpm start
```

### Docker

#### Build Docker Image

To build the Docker image:

```bash
docker build -t <image-name> .
```

#### Run Docker Container

To run the Docker container:

```bash
docker run -d -e NODE_ENV=production -v ${PWD}/logs:/app/logs -p 3000:3000 <image-name>
```

### Project Structure

```
📦 node-express-ts-boilderplate
├── 📂 src
│   ├── 📂 configs
│   │   ├── cors.config.ts
│   │   ├── logger.config.ts
│   │   └── swagger.config.ts
│   ├── 📂 constants
│   │   └── http.code.constants.ts
│   ├── 📂 controllers
│   │   └── base.controller.ts
│   ├── 📂 database
│   ├── 📂 middlewares
│   │   └── base.middleware.ts
│   ├── 📂 routes
│   │   └── base.route.ts
│   ├── 📂 types
│   │   └── environment.d.ts
│   ├── 📂 utils
│   │   ├── environment.util.ts
│   │   └── logger.util.ts
│   └── app.ts
├── 📂 dist
├── 📂 logs
├── .env
├── Dockerfile
├── logParser.py
├── nodemon.json
├── package.json
├── tsconfig.json
├── .dockerignore
├── .gitignore
├── README.md
└── swagger.yaml
```

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
NODE_ENV=development
PORT=3000
DOCS=true
```

### Logging

Logs are managed using Winston and are stored in the `logs` directory. You can configure logging settings in `src/config/logger.config.ts`.

#### Log Parsing with `logParser.py`

The `logParser.py` script helps analyze log files and provides two output formats:

1. Terminal Output (JSON format)
2. CSV File Output (For further analysis in spreadsheets or other tools)

##### Usage

```bash
python logParser.py <fileLocation> [outputCSV]
```

- `<fileLocation>`: Path to the log file to be parsed.
- `[outputCSV]` (optional): If specified, logs are saved as a CSV file.

##### Example

```bash
  python logParser.py logs/app.log parsed_logs.csv
```

#### Output Formats

##### 1️⃣ Terminal Output (JSON format)

```json
{'timestamp': '2025-02-23 01:54:33', 'level': 'error', 'source': 'environment.util.ts', 'message': 'Environment variables are not set ❌'}
{'timestamp': '2025-02-23 01:54:33', 'level': 'info', 'source': 'environment.util.ts', 'message': 'Environment variables are all set ✅'}
{'timestamp': '2025-02-23 01:54:33', 'level': 'info', 'source': None, 'message': 'Swagger UI is running at /api-docs'}
{'timestamp': '2025-02-23 01:54:33', 'level': 'info', 'source': None, 'message': 'Server running at port 3000 🚀'}
{'timestamp': '2025-02-23 01:54:38', 'level': 'error', 'source': 'email.util.ts', 'message': 'Failed to send confirmation email ❌', 'error_response': {'statusCode': 401, 'timestamp': '2025-02-23 01:55:04', 'message': 'Unauthorized'}}
```

##### 2️⃣ CSV File Output

```pgsql
timestamp,level,source,message,error_response
2025-02-23 01:52:41,info,environment.util.ts,Environment variables are all set ✅,
2025-02-23 01:52:41,info,,Swagger UI is running at /api-docs,
2025-02-23 01:52:42,error,email.util.ts,Failed to send confirmation email ❌,
```

##### Note:

- The script automatically converts timestamps to Asia/Bangkok timezone.
- If error_response exists, it will be stored as a string in the CSV file.

### Notifications

Notifications are sent using the webhook method.

To send notifications, add the following environment variables to the `.env` file:

```
# For Gotify

NOTIFICATION=gotify
GOTIFY_URL=https://gotify.example.com
GOTIFY_TOKEN=your-gotify-token
```

> Currently, only Gotify notifications are supported.

### API Documentation

API documentation is generated using Swagger. The documentation will be available at `/api-docs` under one of the following conditions:

1. `NODE_ENV` is not set to `production`
2. `DOCS` environment variable is set to `true`

To edit the Swagger documentation, modify the `swagger.yaml` file located in the root directory.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Disclaimer ⚠️

This boilerplate is provided "as is," without warranty of any kind, express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose. Use at your own risk. The authors are not responsible for any issues arising from the use of this boilerplate.
