export class TaskApi {
  static async getAll() {
    const res = await fetch(`${process.env.HOST}/tasks`)

    return await res.json()
  }

  static async addTask(text: string) {
    const res = await fetch(`${process.env.HOST}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })

    return await res.json()
  }

  static async delete(_id: string) {
    const res = await fetch(`${process.env.HOST}/tasks/${_id}`, {
      method: 'DELETE',
    })

    return await res.json()
  }

  static async update(_id: string, text: string) {
    const res = await fetch(`${process.env.HOST}/tasks/${_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })

    return await res.json()
  }
}