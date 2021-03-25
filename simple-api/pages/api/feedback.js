import fs from 'fs'
import path from 'path'

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), 'data', 'feedback.json')
}

export const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath)
  return JSON.parse(fileData)
}

const handler = (req, res) => {
  if (req.method === 'POST') {
    const { email, text } = req.body
    const newFeedback = { id: new Date().toISOString(), email, text }

    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)

    data.push(newFeedback)

    fs.writeFileSync(filePath, JSON.stringify(data))

    res.status(201).json({ message: 'Success!', feedback: newFeedback })
  } else {
    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)
    res.status(200).json({ message: 'This works!', feedback: data })
  }
}

export default handler
