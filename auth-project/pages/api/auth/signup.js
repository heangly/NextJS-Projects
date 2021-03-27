import { hashPassword } from '../../../lib/auth'
import { connectToDatabase } from '../../../lib/db'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message: 'Invalid input - password should be at least 7 characters long'
      })
      return
    }
    const client = await connectToDatabase()
    const db = client.db()

    const exisitingUser = await db.collection('users').findOne({ email })

    if (exisitingUser) {
      res.status(422).json({ message: 'User already exists' })
      client.close()
      return
    }

    const hashedPassword = await hashPassword(password)

    await db.collection('users').insertOne({
      email,
      password: hashedPassword
    })

    res.status(201).json({ message: 'Created User!' })
    client.close()
  }
}

export default handler
