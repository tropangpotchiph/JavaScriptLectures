# Joke Generator Project Challenge

In our previous discussion, we saw how to make a request to an API using the `XMLHttpRequest` object. In this code challenge, we'll use the same technique to make a request to the [https://api.chucknorris.io/](https://api.chucknorris.io/) to get a random Chuck Norris joke and put it into the page. We will also create a button that will allow us to get a new joke.

This code challenge is designed to put into practice what you have learned so far. You just need to do the following:

- Add an event listener for the button
- Create a function that will make a request to https://api.chucknorris.io/jokes/random using the `XMLHttpRequest` object
- Get the data that is sent back (this.responseText), parse the JSON and get the joke from it
- Display the joke in the page (you can use the `innerHTML` property)

<details>
  <summary>Click For Solution</summary>

First bring in the button and the id of where you want the joke to be displayed:

```js
//Global Variable Here
```

Next, add the event listener for the button:

```js
//Event Listener
```

Now, create the `generateJoke` function. This function will make the request to the API and get the joke:

```js
// code
```

I am going to first check for the `readystate` to be `4` and then check for the `status` to be `200`. If the status is anything but `200`, then I will put an error message into the joke element.

Remember, the server decides how to format the response. In this case, we get a JSON object with a `value` property. So, we need to parse the JSON and get the joke from it. Then we add it to the page.

We also want this to run right away, so let's use the `DOMContentLoaded` event:

```js
//Code
```

</details>
