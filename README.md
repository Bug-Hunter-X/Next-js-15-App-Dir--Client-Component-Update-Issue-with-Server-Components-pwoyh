# Next.js 15 App Dir: Client Component Update Issue

This repository demonstrates an unexpected behavior in Next.js 15's App directory when using server components and client components together.  Specifically, client components sometimes fail to update after changes in data from server components.

## Bug Description

A client component that depends on data from a server component does not re-render when the server component's data changes. This might be due to the way Next.js handles data fetching and component updates in the new app directory.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the initial rendering where client component displays the correct data from server component.
5. Observe the client component does not update if the data in the server component changes.

## Expected Behavior

The client component should re-render whenever the data from the server component changes, reflecting the updated information.

## Actual Behavior

The client component remains unchanged even after server component data updates.

## Solution

This issue can be solved using a variety of techniques that encourage re-rendering, such as using React's `useState` and updating the state whenever data from the server component changes. Alternatively, more advanced techniques such as using Suspense could be employed to manage asynchronous data fetching.