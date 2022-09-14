# Live Football World Cup Score Board

## Dev diary

To begin with, I've chosen CRA as base to start as quick as possible, considering the project is simple and
according to the instructions that's how we want to keep it. However for a real project I'd chosen NextJS.

Similar thing happens about JS. I'm trying to keep it simple, but in a production project with a team I would use Typescript.

I'm assuming the desired result is just frontend and the instructions mention no REST API, no WS and no MS, so my plan is to write 
the logic to start and end matches, and update the scores, in the frontend using a custom hook to handle the logic, a React context for the state and some simple UI to trigger the hook functions.


### I missed a key detail

I went straight forward to work on the test and missed the detail about making it into a library. On Sunday I realized about it...
I tried to make it into a library, but honestly I never had to do that in React yet, so it went a bit wrong. I first tried to do it first as just a simple package but using TS, no bundler involved, but I run into many issues, specially for setting the test environment.

Then I tried Rollup, but still no good results. In the end I'm delivering a project with CRA, no library. Sorry about that.



### Testing hooks went wrong

Another thing that gave me quite a headache was testing hooks. I didn't manage to do it in the end.
I'm used to e2e testing on the frontend, because I find it more useful (specially when using TS, as you can rely on the typings system) but I though creating an e2e test would be too much and that maybe won't be the best startegy for TDD, as these tests are complete and robust but slow to run. It would be better to just go with Jest and React Testing Library.

I was wrong too... Couldn't find a way to properly test the custom hook. I tried to go with an integration test that will take many and the components and the hook, but I still ran into issues when it comes to rendering the hook in the test environment. Seeing I was running out of time, I decided to skip the TDD, at least in terms of implementing the automatic tests.

I defined the main usecases and expected results and went full manual testing.


### Actual implementation

This part went good, however I know it wasn't the core purpose of the test. I struggled a little bit at the beginning about how to interact 
with the logic with no backend, as it felt unrealistic to have a user changing this kind of data directly. However in the end I came up with 
the custom hook strategy to try to decouple as much the component and the frontend from the actual logic, so it could be triggered from anywhere, like from the responses coming from a backend or directly from the UI as I did, without the need of changing the code.

### Summary

The overall test didn't go as good as I would like it. It took more time than I was expecting and it made me realize that maybe I'm 
a bit rusty on the coding side with React, probably because the main roles I've been lately are more high level and architecture related and 
less about being in touch with the actual code. I also feel my React experience is getting a bit outdated in terms of toolchain and testing.

I know this would be an issue for the current role I'm applying, but I'd be keen to explore other options, roles with maybe less responsability or that need less experience so I have the chance to warm up and get it track again, if you have such job positions open.


