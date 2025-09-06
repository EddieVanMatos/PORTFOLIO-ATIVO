import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// Endpoint para LER todos os projetos
app.get('/api/projects', async (req, res) => {
  const projects = await prisma.project.findMany()
  res.json(projects)
})

// Endpoint para CRIAR um novo projeto
app.post('/api/projects', async (req, res) => {
  const newProject = await prisma.project.create({
    data: req.body,
  })
  res.json(newProject)
})

// NOVO: Endpoint para DELETAR um projeto pelo ID
app.delete('/api/projects/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.project.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.sendStatus(204); // 204 significa "No Content", a operação foi um sucesso
});

// Endpoint para LER todas as habilidades
app.get('/api/skills', async (req, res) => {
  const skills = await prisma.skill.findMany()
  res.json(skills)
})

// Endpoint para CRIAR uma nova habilidade
app.post('/api/skills', async (req, res) => {
    const newSkill = await prisma.skill.create({
        data: req.body,
    })
    res.json(newSkill)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})