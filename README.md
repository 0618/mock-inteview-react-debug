# Mock Interview React Debugging Exercise

## Overview
This repository contains a simple React application with a few common bugs. It is designed for a mock interview to test a candidate's ability to debug and fix React issues.

## Branches
- **`candidate`**: The branch with the buggy code. Use this for the interview.
- **`master`** (or `main`): The branch with the working solution.

## Instructions for Interviewer Setup
1.  Clone this repository.
2.  Checkout the `candidate` branch: `git checkout candidate`.
3.  Run `npm install`.
4.  Run `npm run dev` to start the app.
5.  Share your screen or the localhost URL with the candidate.

## Scenario for Candidate
"Welcome! We have a simple 'User Dashboard' application that seems to be acting up. There are 3 main issues reported by our users. Your task is to find them and fix them."

### The Issues
1.  **Search is broken**: When typing in the search bar, the user list doesn't update.
2.  **Delete button doesn't work**: Clicking "Delete" on a user console logs the action, but the user remains on the screen.
3.  **Timer is stuck**: The timer at the top starts at 0, ticks to 1, and then stops.

## Good Luck!
