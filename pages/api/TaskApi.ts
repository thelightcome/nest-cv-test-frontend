export class TaskApi {
  static async getAll() {
    try {
      const res = await fetch(`${process.env.HOST}/tasks`)

      return await res.json()
    } catch (err) { console.error(err) }
  }

  static async addTask(text: string) {
    try {
      const res = await fetch(`${process.env.HOST}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      })

      return await res.json()
    } catch (err) { console.error(err) }
  }

  static async delete(_id: string) {
    try {
      const res = await fetch(`${process.env.HOST}/tasks/${_id}`, {
        method: 'DELETE',
      })

      return await res.json()
    } catch (err) { console.error(err) }
  }

  static async update(_id: string, text: string) {
    try {
      const res = await fetch(`${process.env.HOST}/tasks/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      })

      return await res.json()
    } catch (err) { console.error(err) }
  }
}