import { Router } from 'express'
import { index } from '../controllers/index.controller.js'

const router = Router()

router.get('/ping', index)

export default router
