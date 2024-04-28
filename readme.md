# Kitabisa Assignment

This project is made as the requirement to join Kitabisa as a Frontend Engineer.

## Prerequisites

In order to run this project, you must first already have these items below installed:

- Node.js
- Any package manager you prefer (npm, pnpm, yarn)

## Running the project

1. Clone the project to your local machine

```
git clone https://github.com/faishal123/kitabisa-assignment.git
```

2. Navigate into the project directory

```
cd kitabisa-assignment
```

3. Install the packages

```
npm install
```

4. Run the start command

```
npm run dev
```

5. Open your browser and visit [http://localhost:3000/](http://localhost:3000/)

## Running unit tests

Make sure you've succesfully ran the project locally first.

### Running all the test cases

```
npm run test
```

### Running all the test cases with coverage

1. Run this command

```
npm run coverage
```

2. Go to your project folder, and go into the _coverage_ folder
3. Open _index.html_ and you'll see the unit test coverage for this project

## Technical Decisions

This project is made with [Vike](https://vike.dev/), previously known as [Vite-plugin-ssr](https://vite-plugin-ssr.com/). I decided to use Vike because of the easy SSR support and fast HMR since it's using [Vite](https://vitejs.dev/) as the bundler.  
For unit testing I'm using [Vitest](https://vitest.dev/) for it's easy integration with Vite project.
