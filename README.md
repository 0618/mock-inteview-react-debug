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

## Solutions (For Interviewer Eyes Only)

### Bug 1: Broken Search
- **Cause**: The `useEffect` in `UserList.tsx` is missing `searchTerm` in its dependency array. It only runs once on mount.
- **Fix**: Add `[searchTerm]` to the dependency array.

### Bug 2: Impossible Delete
- **Cause**: In `UserList.tsx`, the `handleDelete` function mutates the `users` array directly (`splice`) and then calls `setUsers` with the *same array reference*. React bails out of the update because the reference hasn't changed.
- **Fix**: Create a new array, e.g., `setUsers(users.filter(u => u.id !== id))`.

### Bug 3: Stuck Timer
- **Cause**: In `Timer.tsx`, the `setInterval` closure captures the initial value of `seconds` (0). It repeatedly calls `setSeconds(0 + 1)`.
- **Fix**: Use the functional update form: `setSeconds(s => s + 1)`.

## Good Luck!
