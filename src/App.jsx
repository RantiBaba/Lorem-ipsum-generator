import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([]) //* This code is used to set the initial state of the text variable to an empty array. This is because the text variable will be an array of paragraphs. We will use the setText function to update the value of the text variable.

  const handleSubmit = e => {
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h4> tired of boring lorem ipsum? </h4>
      <form className='lorem-form' onSubmit={handleSubmit} data-testid='para-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          step='1'
          max='8'
          value={count} //* This value is the current value of the input
          onChange={e => setCount(e.target.value)} //* This function is called every time the value of the input changes. It receives the event object as a parameter and we can access the value of the input through e.target.value.
        />
        <button type='submit' className='btn' data-testid='generate-btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return (
            <p key={nanoid()} data-testid={`para-${index + 1}`}>
              {item}
            </p>
          )
        })}
      </article>
    </section>
  )
}
export default App

/*
 //* Here is a breakdown of the code above:

//* 1. The first line imports the useState hook from the react library, and the data variable from a file named data.js.
//* 2. The component is defined as a function named App.
//* 3. Two state variables, count and text, are initialized using the useState hook. count is initialized to the number 1, and text is initialized to an empty array.
//* 4. The handleSubmit function is defined to handle the form submission event. When the form is submitted, it prevents the default behavior (page refresh), converts the count value to an integer, and updates the text state to the specified number of paragraphs from the data array using the slice method.
//* 5. The return statement contains the JSX code that defines the component's UI.
//* 6. The UI consists of a form that takes user input for the number of paragraphs to generate, a button to generate the paragraphs, and an article that displays the generated paragraphs.
//* 7. The form input element is bound to the count state variable using the value attribute.
//* 8. The onChange event of the input element is bound to a function that updates the count state variable whenever the input changes.
//* 9. The article element maps over the text array and generates a paragraph element for each item in the array, using the map method. Each paragraph element is assigned a unique key using the index value, and a data-testid attribute for testing purposes.
//* 10. The component is exported using the export default statement.
//* 11. nanoid is imported at the beginning of the file. Inside the App component, the key attribute for each paragraph element is set to nanoid(), which generates a unique string for each element. 
//* This is important because React requires that each element in a list have a unique key attribute. 
//* This helps React identify which elements have been added, removed, or changed when the list is updated. 
//* The key attribute should be unique so that React can efficiently update the list without having to rerender all of the elements.
 */
