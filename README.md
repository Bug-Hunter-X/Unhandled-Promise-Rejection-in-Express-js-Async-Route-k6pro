# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections when performing asynchronous operations within route handlers.  The `bug.js` file contains the problematic code, which throws an error within a `setTimeout` callback during request processing.  The `bugSolution.js` file offers a corrected version using appropriate error handling mechanisms.

## Bug Description

The bug occurs because the `setTimeout` callback throws an error asynchronously, and this error is not being properly caught by the Express.js route handler. This leads to an unhandled promise rejection, potentially causing your application to crash or behave unexpectedly.

## Bug Solution

The solution involves using `try...catch` blocks to handle potential errors within the asynchronous operation.  This ensures that errors are caught and handled gracefully without causing application crashes.