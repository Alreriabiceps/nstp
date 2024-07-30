# Running the Program Locally with XAMPP
This guide will walk you through the steps to run the program locally using XAMPP.

## Prerequisites
Before you begin, make sure you have the following installed on your machine:
- XAMPP: Download and install XAMPP from the official website.
- MySQL: Install MySQL on your machine.

## Steps
1. Clone the repository to your local machine.
2. Open XAMPP and start the Apache and MySQL services.
3. Open your web browser and navigate to `http://localhost/phpmyadmin`.
4. Create a new database in MySQL.
5. Navigate to the project folder using the command line.
6. Run `composer install` to install the required dependencies.
7. Run `npm run install` to build the project.
8. Run `npm run build` to build the project.
9. Run `php artisan migrate:fresh --seed` command in your project directory to migrate the database.
10. Run `php artisan serve` to start the local development server.

## Troubleshooting
- If you encounter any issues, make sure that the Apache and MySQL services are running in XAMPP.
- Double-check the database configuration in the program files to ensure it matches your local setup.

## Additional Steps
