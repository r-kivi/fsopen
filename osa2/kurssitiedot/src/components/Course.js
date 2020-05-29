import React from 'react'

const Header = (props) =>
{
  return (
  <>
    <h2>{props.course}</h2>
  </>
  )
}

const Content = (props) =>
{
  const items = props.parts.map((element) =>
   <li key={element.id}>{element.name} {element.exercises}</li>)

  return items
}

const Total = (props) =>
{
  const total = props.parts.reduce((t, p) => t + p.exercises, 0)
  return (
    <b>total of {total} exercises</b>
  )
}

const Course = (props) => {
  return (
    <div>
    <Header course = {props.course.name} />
    <ul><Content parts = {props.course.parts} /></ul>
    <Total parts = {props.course.parts} />
    </div>
  )
}

export default Course