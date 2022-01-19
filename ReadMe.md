# Pharmacy2U TV Schedule

Welcome to the Pharmacy2U technical test. In this test you will create a viewer for the TVMaze TV guide. The user will be able to view all of the shows in the current week, grouped by day. They will be able to click on an episode to see more information about that episode, as well as a list of episodes in that particular show.

You will be working in our fictional ecosystem. This is designed to start at `src/entry.jsx` and to run styles from `styles/entry.scss`. Files are served from the `static` directory under `/static`. You will be able to run the app with `npm run run` or the `node .` command. The app will rebuild each time you refresh the page.

Tip: Check the console in your command prompt if the page fails to load.

The system should use [this API](https://www.tvmaze.com/api) and it is recommended to use these endpoints:

- [`/schedule`](https://www.tvmaze.com/api#schedule)
- [`/shows/:id`](https://www.tvmaze.com/api#show-main-information)
- [`/shows/:id/episodes`](https://www.tvmaze.com/api#show-episode-list)
- [`/shows/:id/episodebynumber`](https://www.tvmaze.com/api#episode-by-number)

## User Story

As a viewer, I want to be able to see information about the shows that are being broadcast this week so I can discover new material and plan my schedule.

## Acceptance Criteria

- A full list of shows broadcast at TVMaze for the current week should be displayed on one screen.
  - These episodes should be broken down by day.
  - Each episode should display the episode title, the show title, and the cover image for the show.
- Clicking on an episode or show title should display information about that episode.
  - A preview image of the episode should display.
  - The title and the summary of the episode should display.
  - The user should be able to navigate to the episode on the relevant online streaming service.
  - A list of other episodes in the show should be displayed.
    - The user should be able to navigate to the episode on the relevant online streaming service.
  - The title, cover image, and summary of the show should be displayed.
- The app should follow the sketches provided.

## What We Are Looking For

### Essential
- Effective use of components for function and design.
- Modern JavaScript best practices.
- Expandable clean code.
- Styling using responsive layouts.

### Useful
- Adequate unit testing.
- Highly performant code.
  - Hint: There are many API endpoints. This could be slow.