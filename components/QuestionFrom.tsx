import styles from './QuestionFrom.module.scss'

import useChange from '../hooks/useChange'
import useActions from '../hooks/useActions'

import { TaskApi } from '../pages/api/TaskApi'

export default function QuestionFrom() {
  const { value, onChange, setValue } = useChange('')

  const { addTask } = useActions()

  async function addTaskClick() {
    if (!value) return

    const data = await TaskApi.addTask(value)

    addTask(data)

    setValue('')
  }

  return (
    <div className={styles.questionFrom}>
      <textarea className={styles.questionFrom__textarea} value={value} onChange={onChange}></textarea>
      <button className={styles.questionFrom__button} onClick={addTaskClick}>Add</button>
    </div>
  )
}