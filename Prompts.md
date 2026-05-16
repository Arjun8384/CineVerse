1. brief me all requirements for developing level 3 project

2. how to add infinite scrolling feature, how does it work

3. okay drop down me a file structure accordingly

4. how does these files are connected, i mean what is the project flow in architecture

5. now one query, how we are going to use ai integraion here, like gemini or openai api keys have 0 limit to reach in free tier, so i use groq api

6. infinitescroll feature failed: useMovies.js:54 Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.

7. scrolling fixed but its giving this in inspect console:
react-dom_client.js?v=d2f7ac31:4180 React has detected a change in the order of Hooks called by Home. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
1. useState                   useState
2. useState                   useState
3. useState                   useState
4. useState                   useState
5. useState                   useState
6. useState                   useState
7. useCallback                useCallback
8. useEffect                  useEffect
9. useCallback                useCallback
10. useRef                    useCallback
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

updateHookTypesDev @ react-dom_client.js?v=d2f7ac31:4180Understand this error
4react-router-dom.js?v=d2f7ac31:4035 Error handled by React Router default ErrorBoundary: Error: Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)
    at updateReducerImpl (react-dom_client.js?v=d2f7ac31:4422:30)
    at updateReducer (react-dom_client.js?v=d2f7ac31:4418:11)
    at Object.useState (react-dom_client.js?v=d2f7ac31:13303:13)
    at exports.useState (react.js?v=d2f7ac31:748:31)
    at useMoodMatcher (useMoodMatcher.js:12:5)
    at Home (Home.jsx:52:7)
    at Object.react_stack_bottom_frame (react-dom_client.js?v=d2f7ac31:12868:12)
    at renderWithHooks (react-dom_client.js?v=d2f7ac31:4213:19)
    at updateFunctionComponent (react-dom_client.js?v=d2f7ac31:5569:16)
    at beginWork (react-dom_client.js?v=d2f7ac31:6140:20)
DefaultErrorComponent @ react-router-dom.js?v=d2f7ac31:4035Understand this error
react-dom_client.js?v=d2f7ac31:5274 Error: Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)
    at updateReducerImpl (react-dom_client.js?v=d2f7ac31:4422:30)
    at updateReducer (react-dom_client.js?v=d2f7ac31:4418:11)
    at Object.useState (react-dom_client.js?v=d2f7ac31:13303:13)
    at exports.useState (react.js?v=d2f7ac31:748:31)
    at useMoodMatcher (useMoodMatcher.js:12:5)
    at Home (Home.jsx:52:7)
    at Object.react_stack_bottom_frame (react-dom_client.js?v=d2f7ac31:12868:12)
    at renderWithHooks (react-dom_client.js?v=d2f7ac31:4213:19)
    at updateFunctionComponent (react-dom_client.js?v=d2f7ac31:5569:16)
    at beginWork (react-dom_client.js?v=d2f7ac31:6140:20)

The above error occurred in the <Home> component.

React will try to recreate this component tree from scratch using the error boundary you provided, RenderErrorBoundary.

defaultOnCaughtError @ react-dom_client.js?v=d2f7ac31:5274Understand this error
react-router-dom.js?v=d2f7ac31:4066 React Router caught the following error during render Error: Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)
    at updateReducerImpl (react-dom_client.js?v=d2f7ac31:4422:30)
    at updateReducer (react-dom_client.js?v=d2f7ac31:4418:11)
    at Object.useState (react-dom_client.js?v=d2f7ac31:13303:13)
    at exports.useState (react.js?v=d2f7ac31:748:31)
    at useMoodMatcher (useMoodMatcher.js:12:5)
    at Home (Home.jsx:52:7)
    at Object.react_stack_bottom_frame (react-dom_client.js?v=d2f7ac31:12868:12)
    at renderWithHooks (react-dom_client.js?v=d2f7ac31:4213:19)
    at updateFunctionComponent (react-dom_client.js?v=d2f7ac31:5569:16)
    at beginWork (react-dom_client.js?v=d2f7ac31:6140:20)


8. but after this fix my infinite scrolling feature is gone, lol

9. in ai moodmatcher:
Failed to load resource: the server responded with a status of 400 ()Understand this error
aiClient.js:51 Groq Error: BadRequestError: 400 {"error":{"message":"The model `llama3-8b-8192` has been decommissioned and is no longer supported. Please refer to https://console.groq.com/docs/deprecations for a recommendation on which model to use instead.","type":"invalid_request_error","code":"model_decommissioned"}}
    at APIError.generate (groq-sdk.js?v=d2f7ac31:74:30)
    at Groq.makeStatusError (groq-sdk.js?v=d2f7ac31:1419:19)
    at Groq.makeRequest (groq-sdk.js?v=d2f7ac31:1550:15)
    at async getMovieRecommendation (aiClient.js:15:9)
    at async findMovieByMood (useMoodMatcher.js:22:9)
    at async handleSubmit (MoodMatcher.jsx:16:5)
getMovieRecommendation @ aiClient.js:51Understand this error
react-dom_client.js?v=d2f7ac31:3713 Encountered two children with the same key, `120`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.


10. write a button css for a button "back-to-top"

11. showing this warning:
Refactor this code to not nest functions more than 4 levels deep. [+4 locations]

12. why so:
react-dom_client.js?v=d2f7ac31:2634 Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
getRootForUpdatedFiber @ react-dom_client.js?v=d2f7ac31:2634Understand this error
186useMovies.js:98 Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.

what you did now :( i have only 1 hour to submit this project but i won't be able to do this in this way


13. with this fix, i received this, i am literally crying bro, i am done with my life this way. pls fix it i need to submit:
Unexpected Application Error!
Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)
Error: Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)
    at updateReducerImpl (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=d2f7ac31:4422:30)
    at updateReducer (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=d2f7ac31:4418:11)
    at Object.useState (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=d2f7ac31:13303:13)
    at exports.useState (http://localhost:5173/node_modules/.vite/deps/react.js?v=d2f7ac31:748:31)
    at useMoodMatcher (http://localhost:5173/src/hooks/useMoodMatcher.js?t=1778927110079:5:28)
    at Home (http://localhost:5173/src/pages/Home.jsx?t=1778927683532:21:66)
    at Object.react_stack_bottom_frame (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=d2f7ac31:12868:12)
    at renderWithHooks (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=d2f7ac31:4213:19)
    at updateFunctionComponent (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=d2f7ac31:5569:16)
    at beginWork (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=d2f7ac31:6140:20)
💿 Hey developer 👋

You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.


14. the favorites get reset on reloading the page means the localstorage in favorites not working

15. the error:
The object passed as the value prop to the Context provider changes every render. To fix this consider wrapping it in a useMemo hook.

for these lines:<FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >


16. Uncaught SyntaxError: The requested module '/src/context/FavoritesContext.jsx?t=1778929477810' does not provide an export named 'useFavoritesContext

17. on clicking AISearch button: Uncaught (in promise) TypeError: onMoodSearch is not a function at handleSubmit (MoodMatcher.jsx:16:11)

18. write the readme file