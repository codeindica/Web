export const Links = [
  {
    id: 1,
    title: 'About',
    value: 1,
  },
  {
    id: 2,
    title: 'Fundamentals',
    value: 2,
  },
  {
    id: 3,
    title: 'Articles',
    value: 3,
  }
]

export const ReduxBasics=[
  {
    id: 1,
    questions: 'What is Redux?',
    answer: 'React is a predictable state container for Javascript based applications. It can be used for any UI based library or framework such as Vue, Angular or React.'
  },
  {
    id: 2,
    questions: 'What is state container?',
    answer: 'React stores the state of the component. This includes the state of all the components are stored inside redux store to reduce complex state managements.'
  },
  {
    id: 3,
    questions: 'Why redux is called predictable?',
    answer: 'React is a predictable state container for Javascript based applications as it stores all the states are explicit and we can keep track of each of the state change.'
  },
  {
    id: 4,
    questions: 'Why there is need for Redux?',
    answer: 'The states are sometimes required across the components, in that case we need to lift the state to the parent level to make it pass to the child via props. This process however is complex and sometimes make the whole application troublesome. Redux helps in reducing the complexity by storing the states at one place and making it accessible throughout the applications.'
  },
  {
    id: 5,
    questions: 'What is React-Redux?',
    answer: 'React-Redux is the official library to integrate react projects with Redux.'
  },
  {
    id: 6,
    questions: 'What are the core-concepts of Redux?',
    answer: 'Store, Actions and Reducers are the core concepts of Redux'
  },
  {
    id: 7,
    questions: 'What are three rules of Redux?',
    answer: `First Rule: Store - It saves the states in form of tree. \n Second rule: Action - You can only update the state via an action, state is read only and only action can get it updated. \n Third Rule: We need to write pure functions which has previous state and an action which updates the state to a new state`
  },
  {
    id: 8,
    questions: 'What are the responsibilities of Store?',
    answer: `It holds application state \n Allow access to state via getState() \n Allow state to be updated by dispatch(action) \n Registers listener via subscribe(listener) \n Removing the listener if required.`
  }
]