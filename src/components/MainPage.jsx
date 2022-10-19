import ListsList from "./ListsList"
import TasksList from "./TasksList"
import ListsForm from './ListsForm'
import TasksForm from "./TasksForm"
import Heading from "./Heading"


const MainPage = () => {
    return (
        <div className="container text-dark mt-5">
            <div>
                <Heading />
                <div className="row">
                    <ListsForm />
                    <TasksForm />
                </div>
                <div className="row">
                    <ListsList />
                    <TasksList />
                </div>
            </div>
    </div>

    )
}

export default MainPage