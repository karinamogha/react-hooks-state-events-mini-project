import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { TASKS, CATEGORIES } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS); 
  const [selectedCategory, setSelectedCategory] = useState("All"); 

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); 
  };

  const handleDeleteTask = (text) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.text !== text)); 
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); 
  };

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleCategorySelect} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleAddTask} 
      />
      {/* This is where you render the TaskList component */}
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;


