import { useEffect } from 'react'
import QuestionFrom from '../components/QuestionFrom'
import Task from '../components/Task'

import useTypedSelector from '../hooks/useTypedSelector'
import useActions from '../hooks/useActions'

import { TaskApi } from './api/TaskApi'

import styles from '../styles/tasks.module.scss'

export default function Tasks() {
  const tasks = useTypedSelector((state) => state.tasks.tasks)

  const { setTasks } = useActions()

  useEffect(() => {
    (async function () {
      const data = await TaskApi.getAll()

      setTasks(data)
    })()
  }, [])

  return (
    <div className={styles.tasks}>
      <div className={styles.tasks__questionFrom}>
        <QuestionFrom />
      </div>
      <div className={styles.tasks__list} >
        {
          tasks.map((task) => {
            return (
              <Task key={task._id} task={task} />
            )
          })
        }
      </div>
    </div>
  )
}
