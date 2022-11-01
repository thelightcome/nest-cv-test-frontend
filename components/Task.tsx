import { useState, useRef } from 'react'

import useActions from '../hooks/useActions'

import { TaskApi } from '../pages/api/TaskApi'

import styles from './Task.module.scss'

function Task({ task }: { task: { _id: string, text: string } }) {
  const [loading, setLoading] = useState(false)
  const [updateFlag, setUpdateFlag] = useState(false)
  const { deleteTask, updateTask } = useActions()

  const editableDiv = useRef<HTMLDivElement>(null);

  async function deleteClick() {
    if (loading) return
    setLoading(true)

    const data = await TaskApi.delete(task._id)

    deleteTask(data._id)

    setLoading(false)
  }

  function updateClick() {
    setUpdateFlag(true)
  }

  async function saveClick() {
    if (loading) return
    setLoading(true)

    if (editableDiv.current === null) return;

    const data = await TaskApi.update(task._id, editableDiv.current.textContent || '')

    updateTask(data)

    setUpdateFlag(false)
    setLoading(false)
  }

  return (
    <div className={styles.task}>
      <div className={styles.task__text} ref={editableDiv} contentEditable={updateFlag ? 'true' : 'false'} suppressContentEditableWarning={true}>{task.text}</div>
      {
        !updateFlag ?
          <button className={styles.task__update} onClick={updateClick}>update</button> :
          <button className={styles.task__save} onClick={saveClick}>save</button>
      }
      <button className={styles.task__delete} onClick={deleteClick}>Delete</button>
    </div>
  )
}

export default Task