/* eslint-disable no-undef */
/**
 * @jest-environment src/mongoose/TestEnvironment.js
 */

const app = require('../../app')
const request = require('supertest')(app)
const db = require('../../mongoose/test')

describe('User routes', () => {
  beforeAll(async () => {
    await db.connect()
  })
  afterEach(async () => {
    await db.clearDatabase()
  })
  afterAll(async () => {
    await db.closeDatabase()
  })

  it('should create a user', async () => {
    const response = await request.post('/users/register').send({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      confirm: '123456'
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  it('should not create a user if exists', async () => {
    await request.post('/users/register').send({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      confirm: '123456'
    })
    const response = await request.post('/users/register').send({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      confirm: '123456'
    })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('error')
  })
  it('should not create a user if email is invalid', async () => {
    const response = await request.post('/users/register').send({
      name: 'John Doe',
      email: 'johndoeexample',
      password: '123456',
      confirm: '123456'
    })

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty('error')
    expect(response.body.field).toBe('email')
  })
})
